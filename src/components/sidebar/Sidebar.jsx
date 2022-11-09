import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

import logo from "./../../assets/images/myadmin.png";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <div className="sidebarTop">
          <div className="sidebarLogo">
            <Link>
              <img src={logo} alt="myadmin-logo" />
            </Link>
          </div>
        </div>
        <hr />
        <div className="sidebarMiddle">
          <ul>
            <p>MAIN</p>
            <li className="sidebarItem">
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
            <p>LISTS</p>
            <li className="sidebarItem">
              <PersonOutlineIcon className="icon" />
              <span>User</span>
            </li>
            <li className="sidebarItem">
              <StoreIcon className="icon" />
              <span>Product</span>
            </li>
            <li className="sidebarItem">
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
            <li className="sidebarItem">
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
            <p>USEFUL</p>
            <li className="sidebarItem">
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>
            <li className="sidebarItem">
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>
            <p>SERVICES</p>
            <li className="sidebarItem">
              <HealthAndSafetyIcon className="icon" />
              <span>System Health</span>
            </li>
            <li className="sidebarItem">
              <PsychologyOutlinedIcon className="icon" />
              <span>Logs</span>
            </li>
            <li className="sidebarItem">
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
            <p>USER</p>
            <li className="sidebarItem">
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
            <li className="sidebarItem">
              <ExitToAppOutlinedIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="sidebarBottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
