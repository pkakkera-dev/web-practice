import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const RouteHoc = injectParams => WrappedComponent => {
  class Hoc extends React.Component {
    state = {};

    render() {
      return (
        <div>
          <Router>
            <Link to="/"></Link>
          </Router>
          <Switch>
            <Route path="/" exact component={} />
          </Switch>
        </div>
      );
    }
  }
};
