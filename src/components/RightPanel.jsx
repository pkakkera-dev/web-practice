import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/routes/Home";
import ArrayComp from "./routes/ArrayComp";

class RightPanel extends React.Component {
  render() {
    return (
      <div className="right-panel">
        <div className="right-header">
          <h3>Hello</h3>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/array-comp" component={ArrayComp} />
            </Switch>
          </Router>
        </div>
        <div className="right-body"></div>
      </div>
    );
  }
}

export default RightPanel;
