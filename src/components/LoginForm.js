import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "../styles/LoginForm.sass";
import Loader from "react-loader-spinner";

const LoginForm = () => {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
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
          setUsernameError(true);
          setPasswordError(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setError("Service Unavailable. Failed to fetch");
      });
  };

  const handleChangeUsername = (e) => {
    setUsernameError(false);
    setUserame(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPasswordError(false);
    setPassword(e.target.value);
  };

  return (
    <div className="login-form-body">
      <div className="col d-flex flex-column justify-content-center align-items-center login-form-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className={usernameError ? "error" : ""}
            value={username}
            onChange={(e) => handleChangeUsername(e)}
            placeholder="login"
          />
          <input
            type="password"
            className={passwordError ? "error" : ""}
            value={password}
            onChange={(e) => handleChangePassword(e)}
            placeholder="password"
          />
          <button type="submit">Log in</button>
          {isLoading && (
            <div className="login-loading">
              <Loader type="ThreeDots" color="#2A2859" height={40} width={40} />
            </div>
          )}
          {error && <p className="login-error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
