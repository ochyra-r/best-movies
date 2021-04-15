import { useSelector } from "react-redux";
import { getUser } from "../features/userSlice";

const User = () => {
  const user = useSelector(getUser);
  console.log(user);
  return (
    <div className="user">
      <img src={user.avatar} alt="" />
    </div>
  );
};

export default User;
