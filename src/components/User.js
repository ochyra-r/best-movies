import { useSelector } from "react-redux";
import { getUser } from "../features/userSlice";

const User = () => {
  const user = useSelector(getUser);
  return (
    <div className="user d-flex flex-column flex-sm-row">
      <div className="img mr-3 mb-2">
        <img src={user.avatar} alt="" />
      </div>
      <div className="info">
        <p className="name">{user.name}</p>
        <p className="desc d-none d-sm-block">
          <span>@{user.username}</span> | <span>{user.event}</span>
        </p>
      </div>
    </div>
  );
};

export default User;
