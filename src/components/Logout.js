import { useDispatch, useSelector } from "react-redux";
import { logout, getUser } from "../features/userSlice";

const Logout = () => {
  const username = useSelector(getUser).username;

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/logout", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === "success") {
          dispatch(logout());
        }
      })
      .catch((error) => {
        // console.log(error);
      });

    dispatch(logout());
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button onClick={(e) => handleLogout(e)}>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
