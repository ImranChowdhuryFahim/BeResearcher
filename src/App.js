import React from 'react';
import './App.css';

import Home from './new-landing-page/App';
import CourseSection from './CourseSection/App';
import AdminPanel from './new-admin-panel/App';
import Announcement from './Dashboard/Announcement';
import Blog from './blog/Blog';
import { CourseProvider } from './data';
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

const PrivateRoute = ({ component: Component, authCheck, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.getAuth() ? ( //Auth.getAuth()
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      )
    }
  />
);

function App() {
  return (
    <CourseProvider>
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
          <Route path="/dashboard" component={Dahsboard}></Route>
          <Route path="/logout">
            <Logout />
          </Route>

          <PrivateRoute
            path="/admin"
            component={AdminPanel}
            authCheck={Auth.getAdminAuth.bind(Auth)}
          />

          <Route path="/announcement" component={Announcement}></Route>

          <Route
            exact
            path="/course/:CourseName/:ContentId"
            component={CourseSection}
            authCheck={Auth.getAuth.bind(Auth)}
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
    </CourseProvider>
  );
}

export default App;
