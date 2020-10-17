import React from "react";
import "./App.css";
import CourseSection from "./CourseSection/App";
import AdminPanel from "./admin-panel";
import { CourseProvider } from "./data";
import { Switch, BrowserRouter as Router, Route , Redirect} from "react-router-dom";
import Coursebutton from "./coursebutton";
import Dahsboard from "./Dashboard/Dashboard";
import SignUp from "./signup/SignUp";
import Login from "./login/Login";
import Auth from "./Auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.getAuth() ? ( //Auth.getAuth()
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
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
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <div className="App">
              <Coursebutton></Coursebutton>
            </div>
          </Route>
          <PrivateRoute exact path="/dashboard" component={Dahsboard}></PrivateRoute>
          <Route path="/admin">
            <AdminPanel />
          </Route>
          <PrivateRoute
            exact
            path="/course/:CourseName/:ContentId"
            component={CourseSection}
            key={2}
          ></PrivateRoute>
        </Switch>
      </Router>
    </CourseProvider>
  );
}

export default App;
