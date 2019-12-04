import React from "react";

import styled, { css } from "styled-components";

import { AppContext } from "../../../App/AppProvider";

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 380px auto 120px 100px;
  margin-bottom: 40px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #6600ff;
    `}
`;

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButtonElem active={page === name} onClick={() => setPage(name)}>
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  );
}

export default function() {
  return (
    <Bar>
      <Logo> Cryptocurrency Dashboard </Logo>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
}
