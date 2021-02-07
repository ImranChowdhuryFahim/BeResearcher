import React ,{useEffect} from 'react';
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
      authCheck() ? ( //Auth.getAuth()
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
  useEffect(() => {
    // Update the document title using the browser API
    let localData = JSON.parse(localStorage.getItem('login'));
      if (localData && localData.login) {
        Auth.authenticate();
        if(localData.adminauth)
        {
          Auth.adminAuthenticate();
        }
      }
  });
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

          <PrivateRoute
            exact
            path="/course/:CourseName/:ContentId"
            component={CourseSection}
            authCheck={Auth.getAuth.bind(Auth)}
            key={2}
          ></PrivateRoute>
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
