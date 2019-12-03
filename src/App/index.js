import React, { Component } from "react";
import "./App.css";

import styled from "styled-components";

import Welcome from "./Components/welcome/welcome-message.component";

const MyButton = styled.div`
  color: green;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <MyButton>Hello</MyButton>
      </div>
    );
  }
}

export default App;
