import React ,{ Component } from 'react'
import './Navbar.css'
import { Avatar ,Badge} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Mail } from '@material-ui/icons'



class Navbar extends Component
{

    render()
    {
        return(
            <div className="admin-nav-bar" >
            
              <Badge badgeContent={4} color={'primary'}  > <Mail></Mail> </Badge>
              <Badge badgeContent={4} color={'primary'}  > <NotificationsIcon></NotificationsIcon> </Badge>
              <Avatar>SH</Avatar>
              
            </div>
        )
    }
}

export default Navbar