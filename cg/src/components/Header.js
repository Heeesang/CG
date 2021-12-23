import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ color }) {
  return (
    <div className="Header" style={{ background: color }}>
      <div className="Header_nav">
        <Link to="/" className="Logo">
          Home
        </Link>
        <ul>
          <li>
            <Link to="/cafeteria">cafeteria</Link>
          </li>
          <li>
            <Link to="/calendar">calendar</Link>
          </li>
          <li>
            <Link to="/schedule">schedule</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
