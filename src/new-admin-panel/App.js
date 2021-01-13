import React, {Component} from 'react'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import Mainwindow from './mainwindow/Mainwindow'
import './App.css'

class App extends Component{
    render()
    {
        return(
            <div>
                <Mainwindow></Mainwindow>
                <Sidebar></Sidebar>
                
            </div>
        )
    }
}

export default App