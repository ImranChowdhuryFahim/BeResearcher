import React, { Component, createRef } from "react";
import { MenuItems } from "./MenuItem";
import { LoggedInMenuItems } from "./LoggedInMenuItems";
import { Avatar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link as LinkScroll } from "react-scroll";
import "./Navbar.css";
import logo from "./flogo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLinkWithScroll = styled(LinkScroll)`
  &.active {
    border-bottom: 2px solid peru;
  }
`;

class Navbar extends Component {
  state = { clicked: false };
  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  UsernameToAvatar(user)
  {
    let char_1 = user.firstName[0];
    let char_2 = user.lastName[0];

    return char_1+char_2;
  }
  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <img src={logo} alt="logo" style={{ height: "80px" }}></img>
        </div>
        <div className="menu-icon" onClick={this.handleClick.bind(this)}>
          <FontAwesomeIcon
            icon={this.state.clicked ? faTimes : faBars}
          ></FontAwesomeIcon>
        </div>
        {this.props.user === null ? (
          <ul
            role="navigation"
            className={this.state.clicked ? "nav-menu active" : "nav-menu"}
          >
            {MenuItems.map((item, index) => {
              if (item.type === "dropdown") {
                return (
                  <div className="dropdown">
                    <li key={index}>
                      <NavLinkWithScroll
                        to={item.url}
                        spy={true}
                        offset={-80}
                        className={item.cName}
                      >
                        {item.title}
                      </NavLinkWithScroll>
                    </li>
                    <div className="dropdown-content">
                      <ul>
                        {item.content.map((elem) => (
                          <li>
                            <NavLinkWithScroll
                              smooth={true}
                              // spy={true}
                              to={elem}
                              offset={-80}
                              duration="600"
                              onClick={this.handleClick.bind(this)}
                            >
                              {elem}
                            </NavLinkWithScroll>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              } else if (item.type === "button") {
                return (
                  <li key={index}>
                    <Link to={item.url} className={item.cName}  onClick={this.handleClick.bind(this)}>
                      {item.title}
                    </Link>
                  </li>
                );
              } else
                return (
                  <li key={index}>
                    <NavLinkWithScroll
                      smooth={true}
                      duration={800}
                      spy={true}
                      to={item.url}
                      offset={-80}
                      className={item.cName}
                      onClick={this.handleClick.bind(this)}
                    >
                      {item.title}
                    </NavLinkWithScroll>
                  </li>
                );
            })}
          </ul>
        ) : (
          <ul
            role="navigation"
            className={this.state.clicked ? "nav-menu active" : "nav-menu"}
          >
            {LoggedInMenuItems.map((item, index) => {
              if (item.type === "dropdown") {
                return (
                  <div key={index} className="dropdown">
                    <li key={index}>
                      <NavLinkWithScroll
                        to={item.url}
                        spy={true}
                        offset={-80}
                        className={item.cName}
                      >
                        {item.title}
                      </NavLinkWithScroll>
                    </li>
                    <div className="dropdown-content">
                      <ul>
                        {item.content.map((elem,i) => (
                          <li key={i}>
                            <NavLinkWithScroll
                              smooth={true}
                              // spy={true}
                              to={elem}
                              offset={-80}
                              duration="600"
                              onClick={this.handleClick.bind(this)}
                            >
                              {elem}
                            </NavLinkWithScroll>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              } else if (item.type === "avatar") {
                return (
                  <div key={index} className="dropdown">
                    <li key={index}>
                      <Avatar style={{ backgroundColor: "#3f51b5" }}>{this.UsernameToAvatar(this.props.user)}</Avatar>
                    </li>
                    <div className="dropdown-content">
                      <ul>
                        {item.content.map((elem,i) => (
                          <li key={i}>
                            <Link to={elem}  onClick={this.handleClick.bind(this)} >{elem}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }
              else if(item.type === 'link')
              {
                return (
                  <li key={index}>
                    <Link
                      smooth={true}
                      duration={800}
                      spy={true}
                      to={item.url}
                      offset={-80}
                      className={item.cName}
                      onClick={this.handleClick.bind(this)}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              }
              else
                return (
                  <li key={index}>
                    <NavLinkWithScroll
                      smooth={true}
                      duration={800}
                      spy={true}
                      to={item.url}
                      offset={-80}
                      className={item.cName}
                      onClick={this.handleClick.bind(this)}
                    >
                      {item.title}
                    </NavLinkWithScroll>
                  </li>
                );
            })}
          </ul>
        )}
      </nav>
    );
  }
}

export default Navbar;
