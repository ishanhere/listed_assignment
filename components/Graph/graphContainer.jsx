import HighchartsReact from "highcharts-react-official";
import { getOptions } from "./utils";
import Highcharts from "highcharts";

const GraphContainer = () => {
  return (
    <div className="graphContainer">
      <div className="flex">
        <div className="flex column start margin-bottom-10">
          <div className="mb_medium font-size-18">Activities</div>
          <div className="mb_light font-size-14 ">May - June 2021</div>
        </div>
        {/* <div className="end">
          <div className="mb_medium font-size-18">Activities</div>
        </div> */}
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={getOptions("line", 1000)}
      />
    </div>
  );
};
export default GraphContainer;
