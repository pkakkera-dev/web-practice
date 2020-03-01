import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/routes/Home";
import ArrayComp from "./routes/ArrayComp";
import Notfound from "./routes/NotFound";
import PhotosContainer from "./routes/PhotosContainer";

class RightPanel extends React.Component {
  render() {
    return (
      <div className="right-panel">
        <div className="right-header">
          <h3>Hello</h3>
        </div>
        <div className="right-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/array-comp" component={ArrayComp} />
            <Route path="/photos" component={PhotosContainer} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default RightPanel;
