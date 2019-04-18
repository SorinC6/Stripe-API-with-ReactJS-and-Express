import React, { Component } from "react";
import "./App.css";
import StripeComponent from "./components/StripeComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StripeComponent />
      </div>
    );
  }
}

export default App;
