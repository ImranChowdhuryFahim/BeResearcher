import React from "react";
import "./App.css";
import CourseSection from "./CourseSection/App";
import AdminPanel from "./admin-panel";
import { CourseProvider } from "./data";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import {withRouter, useRouteMatch} from 'react-router-dom'
import Coursebutton from './coursebutton'

function App() {
  return (
    <CourseProvider>
      <Router>
        <Switch>
          <Route exact path="/home">
            <div className="App">
              <Coursebutton></Coursebutton>
            </div>
          </Route>
          <Route exact path="/admin">
            <AdminPanel />
          </Route>
          <Route exact path="/:CourseName/:ContentId" component={CourseSection}></Route>
          
        </Switch>
      </Router>
    </CourseProvider>
  );
}

export default App;
