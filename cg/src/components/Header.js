import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Wrapper">
      <div className="Header">
        <div className="Header_nav">
          <div className="Logo">
            <Link to="/">Home</Link>
          </div>
          <div className="Header_link">
            <ul>
              <li>
                <Link to="/cafeteria">급식</Link>
              </li>
              <li>
                <Link to="/calendar">학사일정</Link>
              </li>
              <li>
                <Link to="/schedule">시간표</Link>
              </li>
              <li>
                <Link to="/Login">로그인</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
