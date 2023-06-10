import HighchartsReact from "highcharts-react-official";
import React from "react";
import Highcharts from "highcharts";
import { getOptions } from "../Graph/utils";

const Card = () => {
  return (
    <div className="card margin-left-20 margin-top-20 margin-bottom-20">
      <HighchartsReact
        highcharts={Highcharts}
        options={getOptions("pie", 300)}
      />
    </div>
  );
};

export default Card;
