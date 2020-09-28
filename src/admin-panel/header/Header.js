import React from "react";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            style={{ height: "45px", marginTop: "2px", marginLeft: "35px" }}
          ></img>

          <ul>
            <li className="nav-item">
              <Link
                to="/home"
                role="menuitem"
                aria-label="Inbox"
                title="Messages"
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" color="black" />
                <span class="message-badge">10</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/home"
                role="menuitem"
                aria-label="Inbox"
                title="mateen"
              >
                <FontAwesomeIcon icon={faUser} size="lg" color="black" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/home"
                role="menuitem"
                aria-label="Sign Out"
                title="Sign-out"
              >
                <FontAwesomeIcon icon={faSignOutAlt} size="lg" color="black" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
