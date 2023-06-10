import Image from "next/image";
import DashboardLogo from "../../public/images/Vector-1.svg";
import transaction_icon from "../../public/images/transaction_icon.svg";
import schedule_icon from "../../public/images/schedule_icon.svg";
import user_icon from "../../public/images/user_icon.svg";
import setting_icon from "../../public/images/setting_icon.svg";

const SideBar = () => {
  return (
    <div className="sidebar_container flex column">
      <div className="logo margin-bottom-60">Board.</div>
      <div className="sidebar_item_selected">
        <span>
          <Image
            src={DashboardLogo}
            alt="img"
            width="12"
            height="12"
            className="margin-right-15"
          />
        </span>
        <span className="sidebar_item_selected">Dashboard</span>
      </div>
      <div className="sidebar_item">
        <span>
          <Image
            src={transaction_icon}
            alt="img"
            width="12"
            height="12"
            className="margin-right-15"
          />
        </span>
        <span>Transactions</span>
      </div>
      <div className="sidebar_item">
        {" "}
        <span>
          <Image
            src={schedule_icon}
            alt="img"
            width="12"
            height="12"
            className="margin-right-15"
          />
        </span>
        <span>Schedule</span>
      </div>
      <div className="sidebar_item">
        {" "}
        <span>
          <Image
            src={user_icon}
            alt="img"
            width="12"
            height="12"
            className="margin-right-15"
          />
        </span>
        <span>Users</span>
      </div>
      <div className="sidebar_item">
        <span>
          <Image
            src={setting_icon}
            alt="img"
            width="12"
            height="12"
            className="margin-right-15"
          />
        </span>
        <span>Settings</span>
      </div>
      <div className="sidebar_footer">
        <div className="sidebar_item column-end">
          <span>Help</span>
        </div>
        <div className="sidebar_item column-end">
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
