import React, {useState} from "react";
import {Table, Typography, Checkbox} from "antd";

const {Title} = Typography;

const AttendanceManagement = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    // Cấu hình các cột
    const columns = [
        {title: "Employee", dataIndex: "employee", key: "employee", width: 150},
        {title: "Account", dataIndex: "account", key: "account", width: 100},
        {title: "Department", dataIndex: "department", key: "department", width: 100},
        {title: "Full Date", dataIndex: "fullDate", key: "fullDate", width: 50},
        {title: "Check In", dataIndex: "checkIn", key: "checkIn", width: 50},
        {title: "Check Out", dataIndex: "checkOut", key: "checkOut", width: 50},
        {title: "Total Timesheet", dataIndex: "totalTimesheet", key: "totalTimesheet", width: 50},
        {title: "Office Hours", dataIndex: "officeHours", key: "officeHours", width: 50},
        {title: "BZ Hours", dataIndex: "bzHours", key: "bzHours", width: 50},
        {title: "Evaluated WFH Hours", dataIndex: "evaluatedWFHHours", key: "evaluatedWFHHours", width: 50},
        {title: "Unevaluated WFH Hours", dataIndex: "unevaluatedWFHHours", key: "unevaluatedWFHHours", width: 50},
        {title: "Worked Hours", dataIndex: "workedHours", key: "workedHours", width: 50},
        {title: "Working Day", dataIndex: "workingDay", key: "workingDay", width: 50},
        {title: "Unpaid Leaves", dataIndex: "unpaidLeaves", key: "unpaidLeaves", width: 50},
        {title: "Paid Leaves", dataIndex: "paidLeaves", key: "paidLeaves", width: 50},
        {title: "Social Insurance Leave", dataIndex: "socialInsuranceLeave", key: "socialInsuranceLeave", width: 50},
        {
            title: "Unauthorized Late",
            dataIndex: "unauthorizedLate",
            key: "unauthorizedLate",
            width: 50,
            render: (checked) => <Checkbox disabled checked={checked}/>,
        },
        {
            title: "Unauthorized Early",
            dataIndex: "unauthorizedEarly",
            key: "unauthorizedEarly", width: 50,
            render: (checked) => <Checkbox disabled checked={checked}/>,
        },
        {title: "Violation", dataIndex: "violation", key: "violation", width: 50},
        {title: "Minimum Time Violation", dataIndex: "minTimeViolation", key: "minTimeViolation", width: 50},
        {
            title: "Leaves Without Announcement (Times)",
            dataIndex: "leavesWithoutAnnouncementTimes",
            key: "leavesWithoutAnnouncementTimes", width: 50
        },
        {
            title: "Leaves Without Announcement (Days)",
            dataIndex: "leavesWithoutAnnouncementDays",
            key: "leavesWithoutAnnouncementDays", width: 50
        },
        {title: "Paid Days", dataIndex: "paidDays", key: "paidDays", width: 50},
        {title: "OT Hours", dataIndex: "otHours", key: "otHours", width: 50},
    ];

    // Dữ liệu mẫu
    const data = [
        {
            key: "november",
            employee: "November 2024 (4)",
            totalTimesheet: 24.56,
            officeHours: 24,
            bzHours: 0,
            workedHours: 24,
            paidDays: 3,
            isTotal: true,
            children: [{
                key: "1",
                employee: "Đàm Huy Nam Anh (VTI.DS / VTI.DS Internship)",
                account: "anh.damhuynam",
                department: "VTI.DS / Internship",
                fullDate: "Wednesday, November 27, 2024",
                checkIn: "27/11/2024 08:30:00",
                checkOut: "28/11/2024 17:35:57",
                totalTimesheet: 8,
                officeHours: 8,
                bzHours: 0,
                evaluatedWFHHours: 0,
                unevaluatedWFHHours: 0,
                workedHours: 8,
                workingDay: 1,
                unpaidLeaves: 0,
                paidLeaves: 1,
                socialInsuranceLeave: 0,
                unauthorizedLate: false,
                unauthorizedEarly: false,
                violation: 0,
                minTimeViolation: 0,
                leavesWithoutAnnouncementTimes: 0,
                leavesWithoutAnnouncementDays: 0,
                paidDays: 1,
                otHours: 0,
            }]

        },
        {
            key: "december",
            employee: "December 2024 (4)",
            totalTimesheet: 69.1,
            officeHours: 68.2,
            bzHours: 0,
            workedHours: 68.2,
            paidDays: 8.51,
            isTotal: true,

            children: [ {
                key: "2",
                employee: "Đàm Huy Nam Anh (VTI.DS / VTI.DS Internship)",
                account: "anh.damhuynam",
                department: "VTI.DS / Internship",
                fullDate: "Thursday, November 28, 2024",
                checkIn: "28/11/2024 08:18:22",
                checkOut: "28/11/2024 17:35:57",
                totalTimesheet: 8.19,
                officeHours: 8.19,
                bzHours: 0,
                evaluatedWFHHours: 0,
                unevaluatedWFHHours: 0,
                workedHours: 8,
                workingDay: 1,
                unpaidLeaves: 0,
                paidLeaves: 1,
                socialInsuranceLeave: 0,
                unauthorizedLate: false,
                unauthorizedEarly: false,
                violation: 0,
                minTimeViolation: 0,
                leavesWithoutAnnouncementTimes: 0,
                leavesWithoutAnnouncementDays: 0,
                paidDays: 1,
                otHours: 0,
            }]
        },
    ];
    const rowSelection = {
        selectedRowKeys,
        onChange: (keys) => setSelectedRowKeys(keys),
    };
    const rowClassName = (record) => (record.isTotal ? "total-row" : "");
    const [expandedKeys, setExpandedKeys] = useState([]);
    // Hàm xử lý khi click trên dòng cha
    const onRowClick = (record) => {
        if (record.children) {
            setExpandedKeys((prevKeys) =>
                prevKeys.includes(record.key)
                    ? prevKeys.filter((key) => key !== record.key) // Thu gọn nếu đã mở
                    : [...prevKeys, record.key] // Mở rộng nếu đang đóng
            );
        }
    };
    return (
        <div style={{padding: "24px", overflow: "auto"}}>
            <Title level={3}>My Payroll Attendance</Title>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                expandable={{defaultExpandAllRows: false,
                    expandedRowKeys: expandedKeys,
                    onExpand: (expanded, record) => {
                        onRowClick(record);}}}
                pagination={false}
                rowSelection={rowSelection}
            rowClassName={rowClassName}
                scroll={{x: "max-content"}}
                onRow={(record) => ({
                    onClick: () => onRowClick(record),
                })}
            />
            <style>
                {`
                    .total-row {
                        font-weight: bold;
                        background: rgb(255,255,255);
                        background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 100%);
                    }
                `}
            </style>
        </div>
    );
};

export default AttendanceManagement;
