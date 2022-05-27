import React from "react";
import "./SCSS/Login.scss";
const Login = () => {
  return (
    <div className="login-page">
      <div className="form-input">
        <div className="logo-login">
          <img
            alt="avatar login"
            src="https://i.pinimg.com/564x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
          ></img>
        </div>
        <div className="input-name">
          <label>User Name</label>
          <input  autoFocus type="text" />
        </div>
        <div className="input-password" >
          <label>Password</label>
          <input type="text" />
        </div>
        <div className="btn-sign-in">
          <button type="submit">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
