import React, { useRef, useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';
import { Button, Input, Row, Col, Card, Spin, notification } from 'antd';
import axios from 'axios';

const Camera = () => {
    const checkInVideoRef = useRef(null);
    const checkOutVideoRef = useRef(null);
    const checkInCanvasRef = useRef(null);
    const checkOutCanvasRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [faceDetectedCheckIn, setFaceDetectedCheckIn] = useState(false);
    const [faceDetectedCheckOut, setFaceDetectedCheckOut] = useState(false);
    const [employeeId, setEmployeeId] = useState(null);

    // Load face-api.js models
    const loadModels = async () => {
        const MODEL_URL = '/models';
        await Promise.all([
            faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
            faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        ]);
        setLoading(false);
    };

    // Start video streams
    const startVideo = async (videoRef) => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            const video = videoRef.current;
            video.srcObject = stream;

            video.onloadeddata = () => {
                console.log('Video đã sẵn sàng');
            };
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    // Register a face (Employee ID)
    const registerFace = async (videoRef) => {
        const video = videoRef.current;
        const detections = await faceapi
            .detectSingleFace(video)
            .withFaceLandmarks()
            .withFaceDescriptor();

        if (!detections) {
            alert('Không phát hiện khuôn mặt để đăng ký!');
            return;
        }

        if (employeeId === null) {
            alert('Vui lòng nhập ID nhân viên để đăng ký khuôn mặt!');
            return;
        }

        const descriptor = Array.from(detections.descriptor); // Convert Float32Array to Array
        const registeredFaces = JSON.parse(localStorage.getItem('registeredFaces')) || [];

        // Save descriptor with employeeId to localStorage
        registeredFaces.push({ employeeId, descriptor });
        localStorage.setItem('registeredFaces', JSON.stringify(registeredFaces));

        alert(`Đã đăng ký khuôn mặt cho nhân viên ${employeeId}!`);
        setEmployeeId(null); // Clear input after registering
    };

    // Recognize a face
    const recognizeFace = async (videoRef, setFaceDetected, type) => {
        const video = videoRef.current;
        const detections = await faceapi
            .detectSingleFace(video)
            .withFaceLandmarks()
            .withFaceDescriptor();

        if (!detections) {
            setFaceDetected(false);
            showNotification('error', `Không phát hiện khuôn mặt nào để nhận diện! (${type})`);
            return;
        }

        const descriptor = Array.from(detections.descriptor); // Convert Float32Array to Array
        const registeredFaces = JSON.parse(localStorage.getItem('registeredFaces')) || [];

        if (registeredFaces.length === 0) {
            showNotification('error', 'Không có khuôn mặt nào đã đăng ký.');
            return;
        }

        let bestMatch = null;
        let minDistance = Number.MAX_VALUE;

        for (const face of registeredFaces) {
            if (!face.descriptor || face.descriptor.length !== descriptor.length) {
                console.warn(`Descriptor length mismatch, skipping face: ${face.employeeId}`);
                continue;
            }

            const distance = faceapi.euclideanDistance(descriptor, face.descriptor);
            if (distance < minDistance) {
                minDistance = distance;
                bestMatch = face;
            }
        }

        if (bestMatch && minDistance < 0.6) {
            showNotification('success', `Đã nhận diện: ${bestMatch.employeeId} (${type})`);
            sendReportLog(bestMatch.employeeId, type);
        } else {
            showNotification('error', `Không tìm thấy khuôn mặt phù hợp. (${type})`);
        }
    };

    // Show notification
    const showNotification = (type, message) => {
        notification[type]({
            message,
            placement: 'topRight',
            duration: 3,  // Automatically closes after 3 seconds
        });
    };

    // Send report log to the API using axios
    const sendReportLog = async (employeeId, type) => {
        const deviceId = Math.floor(Math.random() * 1000000);  // Random deviceId for demonstration

        const reportData = {
            details: [
                {
                    employeeId,
                    deviceId,
                    type
                }
            ]
        };

        try {
            const response = await axios.post('/api/report-log', reportData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                console.log('Log report đã được gửi thành công');
            } else {
                console.error('Gửi log report thất bại', response);
                showNotification('error', `Lỗi từ server: ${response.data.message || 'Không xác định'}`);
            }
        } catch (error) {
            console.error('Lỗi khi gửi log report:', error);
            showNotification('error', `Lỗi khi gửi log report: ${error.response?.data?.message || error.message}`);
        }
    };

    // Detect faces in the video
    const detectFaces = async (videoRef, canvasRef, setFaceDetected) => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (!video || !canvas) return;

        const displaySize = { width: video.videoWidth, height: video.videoHeight };
        faceapi.matchDimensions(canvas, displaySize);

        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors();

            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);

            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            faceapi.draw.drawDetections(canvas, resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

            setFaceDetected(detections.length > 0);
        }, 1000);
    };

    useEffect(() => {
        loadModels();
        startVideo(checkInVideoRef);
        startVideo(checkOutVideoRef);
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            {/* Loading Spinner */}
            {loading && (
                <div style={{ textAlign: 'center' }}>
                    <Spin size="large" />
                    <p>Đang tải mô hình nhận diện khuôn mặt...</p>
                </div>
            )}

            {/* Video Streams */}
            <Row gutter={[16, 16]} justify="center">
                {/* CheckIn Video */}
                <Col span={12}>
                    <Card title="CheckIn" bordered={false}>
                        <video
                            ref={checkInVideoRef}
                            autoPlay
                            muted
                            style={{ width: '100%' }}
                            onPlay={() => detectFaces(checkInVideoRef, checkInCanvasRef, setFaceDetectedCheckIn)}
                        />
                        <canvas ref={checkInCanvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
                        <p>{faceDetectedCheckIn ? 'Khuôn mặt phát hiện - CheckIn' : 'Không phát hiện khuôn mặt - CheckIn'}</p>
                        <Button
                            type="primary"
                            onClick={() => recognizeFace(checkInVideoRef, setFaceDetectedCheckIn, 'IN')}
                            disabled={!faceDetectedCheckIn}
                            style={{ width: '100%' }}
                        >
                            Nhận diện CheckIn
                        </Button>
                    </Card>
                </Col>

                {/* CheckOut Video */}
                <Col span={12}>
                    <Card title="CheckOut" bordered={false}>
                        <video
                            ref={checkOutVideoRef}
                            autoPlay
                            muted
                            style={{ width: '100%' }}
                            onPlay={() => detectFaces(checkOutVideoRef, checkOutCanvasRef, setFaceDetectedCheckOut)}
                        />
                        <canvas ref={checkOutCanvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
                        <p>{faceDetectedCheckOut ? 'Khuôn mặt phát hiện - CheckOut' : 'Không phát hiện khuôn mặt - CheckOut'}</p>
                        <Button
                            type="primary"
                            onClick={() => recognizeFace(checkOutVideoRef, setFaceDetectedCheckOut, 'OUT')}
                            disabled={!faceDetectedCheckOut}
                            style={{ width: '100%' }}
                        >
                            Nhận diện CheckOut
                        </Button>
                    </Card>
                </Col>
            </Row>

            {/* Face Registration */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Input
                    type="number"
                    value={employeeId}
                    placeholder="Nhập ID nhân viên"
                    onChange={(e) => setEmployeeId(Number(e.target.value))}
                    style={{ width: '300px' }}
                />
                <Button
                    type="primary"
                    onClick={() => registerFace(checkInVideoRef)}
                    disabled={employeeId === null}
                    style={{ marginLeft: '10px' }}
                >
                    Đăng ký khuôn mặt
                </Button>
            </div>
        </div>
    );
};

export default Camera;
