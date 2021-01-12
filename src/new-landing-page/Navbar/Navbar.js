import React, { Component, createRef } from 'react';
import { MenuItems } from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './flogo.png';

class Navbar extends Component {
  state = { clicked: false };
  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }
  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <img src={logo} alt="logo" style={{ height: '80px' }}></img>
        </div>
        <div className="menu-icon" onClick={this.handleClick.bind(this)}>
          <FontAwesomeIcon
            icon={this.state.clicked ? faTimes : faBars}
          ></FontAwesomeIcon>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink className={item.cName} to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      // <div className="landing_navbar">
      //   <div className="landing_icon">
      //     <img
      //       src={logo}
      //       alt="logo"
      //       style={{ height: "100px" }}
      //     ></img>
      //   </div>
      //   <ul className="landing_navlinks" ref={this.myRef}>
      //     <li>
      //       <a href="#">Home</a>
      //     </li>
      //     <li>
      //       <a href="#">About</a>
      //     </li>
      //     <li>
      //       <a href="#">Courses</a>
      //     </li>
      //     <li>
      //       <a href="#">News</a>
      //     </li>
      //     <li>
      //       <a href="#">Events</a>
      //     </li>
      //     <li>
      //       <a href="#">Blog</a>
      //     </li>
      //     <li>
      //       <a href="#">Contact us</a>
      //     </li>
      //     <li>
      //       <a href="#">Log in</a>
      //     </li>
      //     <li>
      //       <a href="#">Sign up</a>
      //     </li>
      //   </ul>
      //   <div className="burger" onClick={this.handleburger.bind(this)}>
      //       <div className="line1"></div>
      //       <div className="line2"></div>
      //       <div className="line3"></div>

      //   </div>
      // </div>
    );
  }
}

export default Navbar;
