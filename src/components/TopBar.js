import "../styles/TopBar.sass";
import User from "./User";
import Logout from "./Logout";

const TopBar = () => {
  return (
    <div className="container-fluid topbar">
      <div className="container">
        <div className="row position-relative">
          <div className="col-12">
            <User />
          </div>
          <div className="logout-btn-container">
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
