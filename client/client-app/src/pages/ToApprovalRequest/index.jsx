import React, {useState} from "react";
import {Button, Checkbox, message, Modal, Table, Typography, Upload} from "antd";
import {PlusOutlined, UploadOutlined} from "@ant-design/icons";

const {Title} = Typography;

const ToApproveRequest = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [file, setFile] = useState(null);
    const columns = [
        {title: "Badge ID", dataIndex: "employeeID", key: "employeeID"},
        {title: "Employee", dataIndex: "employee", key: "employee"},
        {title: "Account", dataIndex: "account", key: "account"},
        {title: "Approving Manager", dataIndex: "", key: ""},
        {title: "Approving Vice DL", dataIndex: "", key: ""},
        {title: "Employee Code", dataIndex: "employeeCode", key: "employeeCode"},
        {title: "State", dataIndex: "", key: ""},
        {title: "Create Date", dataIndex: "", key: ""},
    ];

    const data = [];
    // Xử lý khi nhấn nút Import
    const handleImportClick = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setFile(null);
        setIsModalVisible(false);
    };
    const handleLoadFile = () => {
        if (file) {
            message.success(`File ${file.name} loaded successfully!`);
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
            <Title level={3}>To Approve Request</Title>
            <Button
                icon={<PlusOutlined/>}
            style={{marginRight:"5px"}}>
                Create
            </Button>
            <Button
                type="primary"
                style={{marginBottom: "16px"}}
                icon={<UploadOutlined/>}
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
                        disabled={!file}
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
                    beforeUpload={() => false}
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

export default ToApproveRequest;
