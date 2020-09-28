import React from "react";
import "./App.css";
import CourseSection from "./CourseSection/App";
import AdminPanel from "./admin-panel";
import { CourseProvider } from "./data";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <CourseProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <div className="App">
              <CourseSection></CourseSection>
            </div>
          </Route>
          <Route path="/admin">
            <AdminPanel />
          </Route>
        </Switch>
      </Router>
    </CourseProvider>
  );
}

export default App;
