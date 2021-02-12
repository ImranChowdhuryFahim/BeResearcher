import React, { Component } from 'react';
import './App.css';

import Home from './new-landing-page/App';
import CourseSection from './CourseSection/App';
import AdminPanel from './new-admin-panel/App';
import Announcement from './Dashboard/Announcement';
import Blog from './blog/Blog';
import { CourseProvider } from './data';
import NewsProvider from './News/NewsProvider';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
// import Coursebutton from "./coursebutton";
import Dahsboard from './Dashboard/Dashboard';
import { NewSignup, NewLogin } from './new-signup-login';
import Auth from './Auth';
import Logout from './logout/Logout';
import News from './News/News';
import Events from './Events/Events';

class App extends Component {
  componentDidMount() {
    let localData = JSON.parse(localStorage.getItem('login'));
    if (localData && localData.login) {
      Auth.authenticate();
      if (localData.adminauth) {
        Auth.adminAuthenticate();
      }
    }
  }
  componentDidUpdate() {
    let localData = JSON.parse(localStorage.getItem('login'));
    if (localData && localData.login) {
      Auth.authenticate();
      if (localData.adminauth) {
        Auth.adminAuthenticate();
      }
    }
  }
  render() {
    return (
      <CourseProvider>
        <NewsProvider>
          <Router>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/signup">
                <NewSignup />
              </Route>
              <Route path="/login">
                <NewLogin />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/events">
                <Events />
              </Route>
              <Route path="/dashboard" component={Dahsboard}></Route>
              <Route path="/logout">
                <Logout />
              </Route>

              <Route path="/admin" component={AdminPanel} />

              <Route path="/announcement" component={Announcement}></Route>

              <Route
                exact
                path="/course/:CourseName/:ContentId"
                component={CourseSection}
                key={2}
              ></Route>
              <Route path="*">
                <Redirect
                  to={{
                    pathname: '/home',
                  }}
                />
              </Route>
            </Switch>
          </Router>
        </NewsProvider>
      </CourseProvider>
    );
  }
}

export default App;
