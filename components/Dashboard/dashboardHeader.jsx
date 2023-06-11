import Image from "next/image";
import bell from "../../public/images/bell.svg";
import profile from "../../public/images/profile.svg";

const DashboardHeader = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <div className="dashboardHeader">
      <div className="dashboardHeader_item1">
        <span className="text">Dashboard</span>
      </div>
      <div className="dashboardHeader_item2">
        <input
          className="input_search"
          type="search"
          placeholder="Search..."
        ></input>
      </div>
      <div className="dashboardHeader_item3">
        <Image
          src={bell}
          className="margin-top-7 margin-right-5"
          alt="img"
          width="20"
        />
      </div>
      <div className="dashboardHeader_item4">
        {" "}
        <Image
          src={user?.picture}
          className="margin-top-7 margin-right-5"
          alt="img"
          width="22"
          height="20"
          style={{ borderRadius: 20 }}
        />
      </div>
    </div>
  );
};
export default DashboardHeader;
