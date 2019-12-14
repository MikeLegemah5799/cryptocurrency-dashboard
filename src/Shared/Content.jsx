import React from "react";
import { AppContext } from "../App/AppProvider";

export default function(props) {
  return (
    <AppContext.Consumer>
      {({ coinList, prices, firstVisit }) => {
        if (!coinList) {
          return <div> Loading Coin Info</div>;
        }
        if (!firstVisit && !prices) {
          return <div>Loading Coin Prices</div>;
        }
        return <div> {props.children}</div>;
      }}
    </AppContext.Consumer>
  );
}
