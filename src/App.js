import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";

import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";

import ProtectedRoute from "./auth/ProtectedRoute";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
