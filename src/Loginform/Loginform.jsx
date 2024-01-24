import React from "react";
import { useState } from "react";
import "./Loginform.css";
import EmailIcon from "../images/EmailIcon.png";
import PasswordIcon from "../images/PasswordIcon.png";
import UserIcon from "../images/UserIcon.png";

const Loginform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="header">
          <div className="text">User Registration Form</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <img className="user" src={UserIcon} alt="I-icon" />
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div className="input">
            <img className="email" src={EmailIcon} alt="E-icon" />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="input">
            <img className="password" src={PasswordIcon} alt="P-icon" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
        </div>

        <div className="Submit-Container">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
export default Loginform;
