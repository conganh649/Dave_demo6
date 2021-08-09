import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./resources/styles.css";
import TableItem from "./components/table/TableItem";
import HomePage from "./components/homepage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/table" component={TableItem} exact />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
