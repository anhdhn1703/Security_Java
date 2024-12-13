import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    LogoutOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const breadcrumbMap = {
    "/": "Home",
    "/user": "User",
    "/user/bill": "Bill",
    "/team": "Team",
    "/team/1": "Team 1",
    "/team/2": "Team 2",
};

const menuItems = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
        getItem("Tom", "user/tom"),
        getItem("Bill", "user/bill"),
        getItem("Alex", "user/alex"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
        getItem("Team 1", "team/1"),
        getItem("Team 2", "team/2"),
    ]),
    getItem("Files", "9", <FileOutlined />),
];

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const location = useLocation();
    const navigate = useNavigate();

    const pathnames = location.pathname.split("/").filter((x) => x);
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>,
        ...pathnames.map((value, index) => {
            const url = `/${pathnames.slice(0, index + 1).join("/")}`;
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>{breadcrumbMap[url] || value}</Link>
                </Breadcrumb.Item>
            );
        }),
    ];

    const isAuthenticated = !!localStorage.getItem("authToken");

    const handleLogout = () => {
        // Xóa token khỏi localStorage
        localStorage.removeItem("authToken");
        // Chuyển hướng người dùng về trang login
        navigate("/login");
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={setCollapsed}
                theme="dark"
            >
                <div
                    style={{
                        height: 32,
                        margin: 16,
                        background: "rgba(255, 255, 255, 0.2)",
                        borderRadius: 4,
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}
                >
                    {isAuthenticated && (
                        <Button
                            onClick={handleLogout}
                            type="link"
                            icon={
                                collapsed ? (
                                    <LogoutOutlined style={{ fontSize: "20px" }} />
                                ) : (
                                    "Logout"
                                )
                            }
                            style={{
                                border: "none",
                                background: "none",
                                color: "white",
                                fontSize: "16px",
                            }}
                        />
                    )}
                </div>

                <Menu
                    theme="dark"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={menuItems}
                />
            </Sider>

            {/* Main Layout */}
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>{breadcrumbItems}</Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Content goes here.
                    </div>
                </Content>

                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default Home;
