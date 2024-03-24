import PersonIcon from "@mui/icons-material/Person";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";

const LeftPane = () => {
  return (
    <div className="left-pane">
      <img
        src={require("../android-chrome-192x192.png")}
        alt="text-gram-logo"
        className="logo"
      />

      <Link className="sidebar-links" to="/">
        <div className="sidebar-container">
          <div className="sidebar-icons">
            <HomeOutlinedIcon fontSize="large" />
          </div>
          <div className="sidebar-text">Home</div>
        </div>
      </Link>
      <Link className="sidebar-links" to="/users">
        <div className="sidebar-container">
          <div className="sidebar-icons">
            <PersonIcon fontSize="large"/>
          </div>
          <div className="sidebar-text">Users</div>
        </div>
      </Link>
    </div>
  );
};
export default LeftPane;
