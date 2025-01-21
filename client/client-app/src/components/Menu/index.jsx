import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  StarOutlined,
  LineChartOutlined,
  TeamOutlined,
  CoffeeOutlined,
  ClockCircleOutlined,
  SearchOutlined
} from "@ant-design/icons";

const { Title, Text } = Typography;

const data = [
  {
    icon: <UserOutlined style={{ fontSize: "40px", color: "#0056b3" }} />,
    title: "Attendances",
    description: "Timesheet daily, Forgot attendance...",
    link: "/attendance-management",
  },
  {
    icon: <StarOutlined style={{ fontSize: "40px", color: "#0056b3" }} />,
    title: "Check Point",
    description: "Performance points and skill tracking...",
  },
  {
    icon: <LineChartOutlined style={{ fontSize: "40px", color: "#0056b3" }} />,
    title: "Dashboard",
    description: "Create and customize their dashboard...",
  },
  {
    icon: <TeamOutlined style={{ fontSize: "40px", color: "#0056b3" }} />,
    title: "Employees",
    description: "Centralize employee information...",
  },
  {
    icon: <CoffeeOutlined style={{ fontSize: "40px", color: "#0056b3" }} />,
    title: "Leaves",
    description: "Follow leaves request...",
    link: "/leaves",
  },
  {
    icon: <ClockCircleOutlined style={{ fontSize: "40px", color: "#0056b3" }} />,
    title: "OT Management",
    description: "Track and manage overtime...",
    link: "/ot-management",
  },
  {
    icon: <SearchOutlined style={{ fontSize: "40px", color: "#0056b3" }} />,
    title: "Recruitment",
    description: "Track your recruitment pipeline...",
  },
];

const HumanResources = () => {
  return (
      <div style={{ padding: "24px" }}>
        <Title level={3}>HUMAN RESOURCES</Title>
        <div
            style={{
              height: "2px",
              backgroundColor: "#00796b",
              marginBottom: "16px",
            }}
        />
        <Row gutter={[24, 24]}>
          {data.map((item, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <Link to={item.link}>
                  <Card
                      hoverable
                      style={{ textAlign: "center", borderRadius: "8px" }}
                      bodyStyle={{ padding: "16px" }}
                  >
                    <div style={{ marginBottom: "12px" }}>{item.icon}</div>
                    <Title level={5}>{item.title}</Title>
                    <Text type="secondary">{item.description}</Text>
                  </Card>
                </Link>
              </Col>
          ))}
        </Row>
      </div>
  );
};

export default HumanResources;
