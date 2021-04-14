import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "../styles/LoginForm.sass";

const LoginForm = () => {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    fetch("http://localhost:3001/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        if (data.status === "success") {
          dispatch(
            login({
              username: username,
              name: data.player.name,
              event: data.player.event,
              avatar: data.player.avatar,
              loggedIn: true,
            })
          );
        } else {
          setError(data.error);
        }
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center login-form-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserame(e.target.value)}
              placeholder="login"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <button type="submit">Log in</button>
          </form>
          {isLoading && <p>loadnig</p>}
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
