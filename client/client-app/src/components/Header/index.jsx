import React from "react";
import { useNavigate} from "react-router-dom";
import './Header.css';

    const Header = () => {
        const navigate = useNavigate();

        const handleLogout = () => {
            // Xóa token khỏi localStorage
            localStorage.removeItem("authToken");

            // Chuyển hướng người dùng về trang login
            navigate("/login");
        };

        const isAuthenticated = !!localStorage.getItem("authToken");
        return (
            <header className="nav1">
                <div className="title-container1">
                    <h1 className="title1">Nam Anh Dev</h1>
                </div>
                <div className="subtitle-container1">
                    <p className="subtitle1">Fullstack Developer | Freelancer</p>
                </div>
                <ul className="menu1">
                    {isAuthenticated && (
                        <li>
                            <button onClick={handleLogout} className="menu-link1" style={{ border: "none", background: "none", cursor: "pointer" }}>
                                Logout
                            </button>
                        </li>
                    )}
                </ul>
            </header>
        );
    };

    export default Header;
