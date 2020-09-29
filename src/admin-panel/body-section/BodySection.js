import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./bodysection.css";
import routes from "./routes";

const BodySection = () => {
  return (
    <div className="body">
      <h1>body</h1>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.body />}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default BodySection;
