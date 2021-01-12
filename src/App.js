import React from 'react';
import './App.css';

import Home from './landing-page/Home';
import NewHome from './new-landing-page/App'
import CourseSection from './CourseSection/App';
import AdminPanel from './admin-panel';
import NewAdminPanel from './new-admin-panel/App'
import Announcement from './Dashboard/Announcement';
import { CourseProvider } from './data';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
// import Coursebutton from "./coursebutton";
import Dahsboard from './Dashboard/Dashboard';
import SignUp from './signup/SignUp';
import Login from './login/Login';
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
  return (
    <CourseProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/newhome">
           <NewHome/>
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/home">
            <div className="App">
              <Coursebutton></Coursebutton>
            </div>
          </Route> */}
          <Route exact path="/dashboard" component={Dahsboard}></Route>
          <Route exact path="/logout" component={Logout}></Route>

          <PrivateRoute
            path="/admin"
            component={AdminPanel}
            authCheck={Auth.getAdminAuth.bind(Auth)}
          />

          <Route path="/newadmin">
             <NewAdminPanel></NewAdminPanel>
          </Route>

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
