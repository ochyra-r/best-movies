import "../styles/TopBar.sass";
import User from "./User";

const TopBar = () => {
  return (
    <div className="container-fluid topbar">
      <div className="container">
        <div className="row">
          <div className="col">
            <User />
            <div className="log_btn">Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
