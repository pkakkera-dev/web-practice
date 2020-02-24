import React from "react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Footer from "./components/Footer";
import "./styles/style.scss";
import MenuItem from "./components/MenuItem";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/routes/Home";

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <RightPanel />
      <Footer />
    </div>
  );
}

export default App;
