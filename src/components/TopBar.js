import "../styles/TopBar.sass";
import User from "./User";
import Logout from "./Logout";

const TopBar = () => {
  return (
    <div className="container-fluid topbar">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <User />
          </div>
          <div className="col-6">
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
