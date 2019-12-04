import React, { Component } from "react";
import "./App.css";
import Welcome from "./Components/welcome/welcome-message.component";
import AppLayout from "./Components/AppLayout/AppLayout";
import AppBar from "./Components/AppBar/AppBar";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar />
        <Welcome />
      </AppLayout>
    );
  }
}

export default App;
