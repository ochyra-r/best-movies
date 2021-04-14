import React, { useState } from "react";
import "../styles/LoginForm.sass";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center login-form-container">
          <form>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="login"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <button>Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
