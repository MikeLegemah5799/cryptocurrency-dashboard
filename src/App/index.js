import React, { Component } from "react";
import "./App.css";

import styled, { css } from "styled-components";

import Welcome from "./Components/welcome/welcome-message.component";

const MyButton = styled.div`
  color: green;
  ${props =>
    props.primary &&
    css`
      color: palevioletred;
    `}
`;

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <MyButton>Hello</MyButton>
        <MyButton primary>Hello</MyButton>
      </div>
    );
  }
}

export default App;
