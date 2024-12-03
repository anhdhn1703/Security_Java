import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header className="nav1">
            <div className="title-container1">
                <h1 className="title1">Nam Anh Dev</h1>
            </div>
            <div className="subtitle-container1">
                <p className="subtitle1">Fullstack Developer | Freelancer</p>
            </div>
            <ul className="menu1">
                <li><Link to="/gioi-thieu" className="menu-link1">Giới thiệu</Link></li>
                <li><Link to="/boi-bai-tarot" className="menu-link1">Tarot</Link></li>
                <li><Link to="/lien-he" className="menu-link1">Liên hệ</Link></li>
            </ul>
        </header>
    );
};

export default Header;
