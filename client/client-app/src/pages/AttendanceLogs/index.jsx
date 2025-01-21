import React, {useState} from "react";
import {Button, Checkbox, message, Modal, Table, Typography, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";

const {Title} = Typography;

const AttendanceLogs = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [file, setFile] = useState(null);
    const columns = [
        {title: "Badge ID", dataIndex: "employeeID", key: "employeeID"},
        {title: "Employee", dataIndex: "employee", key: "employee"},
        {title: "Check Time", dataIndex: "checkTime", key: "checkIn"},
        {title: "Device ID", dataIndex: "device", key: "device"},
        {title: "Type", dataIndex: "type", key: "type"},
        {
            title: "View Only", dataIndex: "viewOnly", key: "viewOnly"
            , render: (checked) => <Checkbox disabled checked={checked}/>,
        },
    ];

    const data = [
        {
            key: "1",
            employeeID: "234678222",
            employee: "Đàm Huy Nam Anh (VTI.DS / VTI.DS Internship)",
            checkTime: "27/11/2024 08:30:00",
            device: "VTI_F1_G1_IN",
            type: "IN",
        },
        {
            key: "2",
            employeeID: "234678222",
            employee: "Đàm Huy Nam Anh (VTI.DS / VTI.DS Internship)",
            checkTime: "28/11/2024 08:30:00",
            device: "VTI_F2_G1_IN",
            type: "OUT",
        },
    ];
    // Xử lý khi nhấn nút Import
    const handleImportClick = () => {
        setIsModalVisible(true);
    };

    // Xử lý nút Cancel trong modal
    const handleCancel = () => {
        setFile(null); // Xóa file đã chọn (nếu có)
        setIsModalVisible(false);
    };
    // Xử lý nút Load File trong modal
    const handleLoadFile = () => {
        if (file) {
            message.success(`File ${file.name} loaded successfully!`);
            // Thực hiện xử lý file tại đây (đọc dữ liệu, phân tích...)
            setIsModalVisible(false);
        } else {
            message.error("Please upload a file before loading!");
        }
    };
    // Xử lý tệp tải lên
    const handleFileChange = (info) => {
        const {file} = info;
        setFile(file);
        message.success(`${file.name} selected.`);
    };
    return (
        <div style={{padding: "24px", overflow: "auto"}}>
            <Title level={3}>Attendance Logs</Title>
            <Button
                type="primary"
                style={{marginBottom: "16px"}}
                onClick={handleImportClick}
            >
                Import
            </Button>
            <Table
                columns={columns}
                dataSource={data}
                rowSelection={{
                    selectedRowKeys,
                    onChange: (keys) => setSelectedRowKeys(keys),
                }}
            />
            <Modal
                title="Import Instructions"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button
                        key="load"
                        type="primary"
                        onClick={handleLoadFile}
                        disabled={!file} // Vô hiệu hóa nút nếu chưa có file
                    >
                        Load File
                    </Button>,
                ]}
            >
                <p><b>Instructions:</b></p>
                <ul>
                    <li>Only files with extensions <code>.csv</code>, <code>.xls</code>, <code>.xlsx</code> are
                        supported.
                    </li>
                    <li>Ensure the file follows the correct format:</li>
                    <ul>
                        <li>First row should contain headers.</li>
                        <li>Data should be properly structured.</li>
                    </ul>
                    <li>File size must not exceed 5MB.</li>
                </ul>
                <p><b>Warning:</b> Improper file formats may cause errors during data processing.</p>
                <Upload
                    beforeUpload={() => false} // Ngăn tải lên tự động
                    accept=".csv,.xls,.xlsx"
                    onChange={handleFileChange}
                    showUploadList={false}
                >
                    <Button icon={<UploadOutlined/>}>Select File</Button>
                </Upload>
                {file && <p>Selected File: {file.name}</p>}
            </Modal>
        </div>
    );
};

export default AttendanceLogs;
