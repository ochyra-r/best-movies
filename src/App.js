import "./App.sass";
// import TopBar from "./components/TopBar";
import LoginForm from "./components/LoginForm";
import Page from "./components/Page";
// import Logout from "./components/Logout";
import { useSelector } from "react-redux";
import { getUser } from "./features/userSlice";
// import Movies from "./components/Movies";
// import Categories from "./components/Categories";

function App() {
  const user = useSelector(getUser);
  return (
    <div className="App">
      {!user && <LoginForm />}
      {user && <Page />}
    </div>
  );
}

export default App;
