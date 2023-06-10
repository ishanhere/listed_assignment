import dynamic from "next/dynamic";

const DashboardComponent = dynamic(
  () => import("../components/Dashboard/dashboard.jsx"),
  {
    ssr: false,
  }
);

const DashboardComponentPage = () => {
  return <DashboardComponent />;
};

export default DashboardComponentPage;
