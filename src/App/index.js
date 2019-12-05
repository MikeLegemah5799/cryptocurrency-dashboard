import React, { Component } from "react";
import "./App.css";
import AppLayout from "./Components/AppLayout/AppLayout";
import AppBar from "./Components/AppBar/AppBar";
import { AppProvider } from "./AppProvider";
import Settings from "../Settings";
import Content from "../Shared/Content";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Content>
            <Settings />
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
