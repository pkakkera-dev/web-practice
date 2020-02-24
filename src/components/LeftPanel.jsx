import React from "react";
import MenuItem from "./MenuItem";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "../components/routes/Home";
import ArrayComp from "./routes/ArrayComp";

class LeftPanel extends React.Component {
  render() {
    return (
      <div className="left-panel">
        <div className="left-header">
          <h3>Menu</h3>
        </div>
        <Router>
          <div className="left-body">
            <MenuItem>
              <Link to="/" style={{ textDecorationLine: "none" }}>
                {" "}
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="array-comp" style={{ textDecorationLine: "none" }}>
                {" "}
                Arrays
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/songs" style={{ textDecorationLine: "none" }}>
                {" "}
                Songs
              </Link>
            </MenuItem>
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/array-comp" component={ArrayComp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default LeftPanel;
