import React from "react";
import "./App.css";
import CourseSection from "./CourseSection/App";
import AdminPanel from "./admin-panel";
import { CourseProvider } from "./data";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Coursebutton from './coursebutton'
import Dahsboard from './Dashboard/Dashboard'

function App() {
  return (
    <CourseProvider>
      <Router>
        <Switch>
          <Route  path="/home" >
            <div className="App">
              <Coursebutton></Coursebutton>
            </div>
          </Route>
          <Route exact path="/dashboard" component={Dahsboard}></Route>
          <Route  path="/admin" >
            <AdminPanel />
          </Route>
          <Route exact path="/course/:CourseName/:ContentId" component={CourseSection} key={2}></Route>
          
        </Switch>
      </Router>
    </CourseProvider>
  );
}

export default App;
