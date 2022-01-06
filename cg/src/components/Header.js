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
                <Link to="/reserve">빌리기</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
