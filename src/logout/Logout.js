import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Logout extends Component{
    render()
    {
        localStorage.removeItem('login')
        return <Redirect to='login'></Redirect>
    }
}

export default Logout;