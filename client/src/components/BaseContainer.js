import React from "react";
import { Route } from "react-router-dom";

// Components

const BaseContainer = () => {
  const routes = [
    {
      path: "/register",
      exact: true,
      component: ""
    },
    {
      path: "/login",
      exact: true,
      component: ""
    },
    {
      path: "/sitedetails",
      exact: true,
      component: ""
    },
    {
      path: "/dashboard",
      exact: true,
      component: ""
    }
  ];
  return (
    <div>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </div>
  );
};

export default BaseContainer;
