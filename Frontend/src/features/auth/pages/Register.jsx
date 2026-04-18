import React from "react";
import './auth.from.scss'
import { useNavigate,Link } from "react-router";

const Register = () => {
  const navigater = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <div className="form-contener">
        <h1>Register</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              id="username"
              name="username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              id="email"
              name="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password "
              id="password"
              name="password"
            />
          </div>
          <button className="button primary-button"> Register </button>
        </form>
        <p>Already have an account ?  <Link to={"/login"}>Login</Link></p>
      </div>
    </main>
  );
};

export default Register;
