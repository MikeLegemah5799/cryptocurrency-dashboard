import highchartsConfig from "./HighChartsConfig";
import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import ReactHighCharts from "react-highcharts";
import HighChartsTheme from "./HighChartsTheme";
ReactHighCharts.Highcharts.setOptions(HighChartsTheme);

export default function() {
  return (
    <AppContext.Consumer>
      {({}) => (
        <Tile>
          <ReactHighCharts config={highchartsConfig()} />
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
