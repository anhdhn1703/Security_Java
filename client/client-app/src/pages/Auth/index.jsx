import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import "antd/dist/reset.css";
import { useNavigate } from "react-router-dom";

const Auth = ({ onLogin }) => {
    const navigate = useNavigate();

    const handleLogin = async (values) => {
        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (data.code === 1000 && data.result.authenticate) {
                const token = data.result.token;

                // Lưu token vào localStorage
                localStorage.setItem("authToken", token);

                // Hiển thị thông báo thành công
                message.success("Login successful!");

                // Gọi hàm onLogin để cập nhật trạng thái
                onLogin();

                // Chuyển hướng đến trang chính
                navigate("/");
            } else {
                // Hiển thị thông báo lỗi từ API
                message.error(data.message || "Login failed!");
            }
        } catch (err) {
            console.error("Error:", err);

            // Hiển thị thông báo lỗi khi gặp sự cố
            message.error("Something went wrong. Please try again later.");
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f0f2f5",
            }}
        >
            <Form
                name="login-form"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={handleLogin}
                style={{ width: 300 }}
            >
                <h2 style={{ textAlign: "center" }}>Login</h2>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: "Please input your username!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your password!" }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Auth;
