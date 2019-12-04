import React, { Component } from "react";
import "./App.css";
import AppLayout from "./Components/AppLayout/AppLayout";
import AppBar from "./Components/AppBar/AppBar";
import { AppProvider } from "./AppProvider";
import Settings from "../Settings";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Settings />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
