import React from 'react';
import {Breadcrumb, Button, Dropdown, Layout, Menu, Space, theme} from 'antd';
import {
    AppstoreOutlined,
    AppstoreTwoTone,
    BellOutlined, CameraOutlined, DownOutlined, GlobalOutlined,
    HomeOutlined,
    MessageOutlined,
    WindowsOutlined
} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import AttendanceManagement from "../../pages/AttendanceManagement";

const {Header, Content} = Layout;
const Headers = ({children}) => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const userMenu = (
        <Menu
            onClick={({key}) => {
                if (key === "logout") {
                    handleLogout();
                }
            }}
            items={[
                {key: "profile", label: "Profile"},
                {key: "settings", label: "Settings"},
                {key: "logout", label: "Logout"},
            ]}
        />
    );
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    };
    // Menu cho Attendance Management
    const menuAttendanceManagement = (
        <Menu
            onClick={({key}) => {
                if (key === "1") navigate("/attendance-management");
            }}
            items={[
                {key: "1", label: "My Payroll Attendance"},
            ]}
        />
    );

    // Menu cho Attendance Request
    const menuAttendanceRequest = (
        <Menu
            onClick={({key}) => {
                if (key === "1") {
                    navigate("/all-request")
                } else if (key === "2") {
                    navigate("/to-approve-request")
                } else {
                    navigate("/my-request")
                }
            }}
            items={[
                {key: "1", label: "All Request"},
                {key: "2", label: "To Approve Request"},
                {key: "3", label: "My Request"},
            ]}
        />
    );

    // Menu cho Reporting
    const menuReporting = (
        <Menu
            onClick={({key}) => {
                if (key === "1") {
                    navigate("/my-attendance-logs")
                } else if (key === "2") {
                    navigate("/attendance-logs")
                }
            }}
            items={[
                {key: "1", label: "My Attendance Logs"},
                {key: "2", label: "Attendance Log"},
            ]}
        />
    );
    return (
        <Layout>
            <Header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#0078D7",
                    padding: "0 16px",
                }}
            >
                <div style={{display: "flex", alignItems: "center"}}>
                    <Button type="link" style={{color: "#ffffff"}}>
                        <AppstoreOutlined style={{fontSize: "20px"}} onClick={() => navigate("/menu")}/>
                    </Button>
                    <Button type="link" onClick={() => navigate("/attendance-management")}>
                        <h2 style={{color: "#ffffff", margin: 0, paddingRight: 30}}>Attendances</h2>
                    </Button>


                    {/* Dropdown for Attendance Management */}
                    <Dropdown overlay={menuAttendanceManagement} trigger={['click']}>
                        <Button type={"link"} style={{color: "#ffffff"}}>
                            Attendance Management
                        </Button>
                    </Dropdown>

                    {/* Dropdown for Attendance Request */}
                    <Dropdown overlay={menuAttendanceRequest} trigger={['click']}>
                        <Button type={"link"} style={{color: "#ffffff"}}>
                            Attendance Request
                        </Button>
                    </Dropdown>

                    {/* Dropdown for Reporting */}
                    <Dropdown overlay={menuReporting} trigger={['click']}>
                        <Button type={"link"} style={{color: "#ffffff"}}>
                            Reporting
                        </Button>
                    </Dropdown>

                </div>
                <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
                    <Button>
                        <CameraOutlined style={{fontSize: "24px", color: 'black'}} onClick={() => navigate("/attendance")}/>
                        Check IN - OUT
                    </Button>
                    <Dropdown overlay={userMenu} trigger={["click"]}>
                        <Space style={{color: "#ffffff", cursor: "pointer"}}>
                            <GlobalOutlined style={{fontSize: "18px"}}/>
                            Đàm Huy Nam Anh
                            <DownOutlined/>
                        </Space>
                    </Dropdown>
                </div>
            </Header>
            <Content>
                {children}
            </Content>
        </Layout>
    );
};
export default Headers;