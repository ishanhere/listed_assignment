import Card from "../Card/cardGraph";
import CardTodo from "../Card/cardTodo";
import CardSmall from "../CardSmall/cardSmall";
import GraphContainer from "../Graph/graphContainer";
import SideBar from "../Sidebar/sideBar";
import DashboardHeader from "./dashboardHeader";

const Dashboard = () => {
  return (
    <div className="dashboard ">
      <div className="dashboard_column_1">
        <SideBar />
      </div>
      <div className="dashboard_column_2">
        <DashboardHeader />
        <CardSmall />
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
