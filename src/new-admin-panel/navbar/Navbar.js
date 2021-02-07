import React, { Component } from 'react';
import './Navbar.css';
import { Avatar, Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Mail } from '@material-ui/icons';
import { Link } from 'react-router-dom';



class Navbar extends Component {

  UsernameToAvatar(user)
  {
    let char_1 = user.firstName[0];
    let char_2 = user.lastName[0];

    return char_1+char_2;
  }
  render() {
    return (
      <div className="admin-nav-bar">
        <Badge badgeContent={4} color={'primary'}>
          {' '}
          <Mail></Mail>{' '}
        </Badge>
        <Badge badgeContent={4} color={'primary'}>
          {' '}
          <NotificationsIcon></NotificationsIcon>{' '}
        </Badge>
        <div className="avatar">
          <Avatar style ={{ backgroundColor:'#3f51b5' }}>{this.UsernameToAvatar(this.props.user)}</Avatar>
          <div className="dropdown-content1">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/announcement">Announcements</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
