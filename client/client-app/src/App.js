import {BrowserRouter, Outlet, Route, Router, Routes} from "react-router-dom";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import ProtectedRoute from "./util/ProtectedRoute";
import {useState} from "react";
import AttendanceManagement from "./pages/AttendanceManagement";
import Menu from "./components/Menu";
import {Layout} from "antd";
import Camera from "./pages/Camera";
import MyAttendanceLogs from "./pages/MyAttendanceLogs";
import AttendanceLogs from "./pages/AttendanceLogs";
import AllRequest from "./pages/AllRequest";
import ToApproveRequest from "./pages/ToApprovalRequest";
import MyRequest from "./pages/MyRequest";
const {Header: AntdHeader, Content} = Layout;
function MainLayout() {
    return (
        <Layout style={{minHeight: "10vh"}}>
            <Header />
            <Content>
                <Outlet />
            </Content>
        </Layout>
    );
}

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        !!localStorage.getItem("authToken")
    );
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Auth onLogin={() => setIsAuthenticated(true)}/>}/>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <MainLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="/attendance-management" element={<AttendanceManagement />} />
                    <Route path="/my-attendance-logs" element={<MyAttendanceLogs />} />
                    <Route path="/attendance-logs" element={<AttendanceLogs />} />
                    <Route path="/all-request" element={<AllRequest />} />
                    <Route path="/to-approve-request" element={<ToApproveRequest />} />
                    <Route path="/my-request" element={<MyRequest />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/attendance" element={<Camera />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App
