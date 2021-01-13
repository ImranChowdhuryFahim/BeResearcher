import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './menues/Dashboard/Dashboard';
import Sidebar from './sidebar/Sidebar';
import Mainwindow from './mainwindow/Mainwindow';
// import './mainwindow/Mainwindow.css';
import routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <BrowserRouter>
          <Sidebar />
          <div className="admin-mainwindow">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.body />}
                />
              ))}

              {/* <Route
                path="/newadmin/dashboard"
                exact={true}
                children={() => <Dashboard />}
              /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
