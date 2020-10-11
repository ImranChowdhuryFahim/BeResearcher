import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./body-section/routes";

import Header from "./header/Header";
import LeftSidebar from "./left-sidebar/LeftSidebar";
import "./index.css";
const AdminPanel = () => {
  return (
    <>
      <Header />
      <div className="admin-container">
        <Router>
          <LeftSidebar />
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
    </>
  );
};

export default AdminPanel;
