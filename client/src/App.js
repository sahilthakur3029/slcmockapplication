import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import FormController from "./components/IntakeForm/FormController";
import Home from "./components/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/intakeform" component={FormController} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;