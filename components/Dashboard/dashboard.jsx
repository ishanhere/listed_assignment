import { useEffect, useState } from "react";
import { getRequest } from "../../pages/api/utils";
import Card from "../Card/cardGraph";
import CardTodo from "../Card/cardTodo";
import CardSmall from "../CardSmall/cardSmall";
import GraphContainer from "../Graph/graphContainer";
import SideBar from "../Sidebar/sideBar";
import DashboardHeader from "./dashboardHeader";
import { GET_STATS } from "../../pages/api/constants";

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    getRequest({ url: GET_STATS }).then((res) => {
      console.log(res);
      //   let temp = res.data.replace(/s'/g, '"');
      //   temp = JSON.parse(res.data);
      //   console.log(ojson["name"]);
      //   let t = JSON.parse(res.request.response);
      //   console.log("123", temp);
      //   temp = JSON.parse(res.data);
      setStats(res.data);
    });
  }, []);

  return (
    <div className="dashboard ">
      <div className="dashboard_column_1">
        <SideBar />
      </div>
      <div className="dashboard_column_2 ">
        <DashboardHeader />

        {stats && stats.length ? (
          <CardSmall stats={stats} />
        ) : (
          <div className="flex row-center">
            <div className="loader"></div>
          </div>
        )}
        <GraphContainer />
        <div className="flex">
          <Card />
          <CardTodo />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
