import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import BaseContainer from "./components/BaseContainer";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <NavBar />
            <BaseContainer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
