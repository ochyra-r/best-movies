import "./App.sass";
import LoginForm from "./components/LoginForm";
import Page from "./components/Page";
import { useSelector } from "react-redux";
import { getUser } from "./features/userSlice";

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
