import React, { useState } from "react";
import "./auth.from.scss";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../Hooks/useAuth";

const Register = () => {
  const { loading, handleRegister } = useAuth();
  const navigater = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="Enter username"
              id="username"
              name="username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Enter email address"
              id="email"
              name="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter password "
              id="password"
              name="password"
            />
          </div>
          <button className="button primary-button"> Register </button>
        </form>
        <p>
          Already have an account ? <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
