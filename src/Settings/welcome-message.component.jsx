import React from "react";
import { AppContext } from "../App/AppProvider";

export default function({ firstVisit }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            Hi, Welcome To Your Cryptocurrency Dashboard. Please select your
            favorite cryptos to begin.{" "}
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
}
