import React, { useState } from "react";
import "./Signin.css";
import { client } from "api-client";
import axios from "axios";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    if (!username || !password) return;

    const data = { _operation: "login", username, password };
    const response = await client("/modules/Mobile/api.php", "POST", data);
    console.log(response);

    // const formData = new FormData();
    // formData.append("_operation", "login");
    // formData.append("username", "admin");
    // formData.append("password", "admin");

    // // Define headers for the FormData
    // const headers = {
    //   "Content-Type": "multipart/form-data", // Set the content type to multipart form data
    // };

    // // Make the POST request with Axios
    // const response = await axios.post(
    //   `http://test.karansatsang.org/Satsanglibrary/modules/Mobile/api.php`,
    //   formData,
    //   {
    //     headers,
    //   }
    // );

    // // Handle the response
    // console.log("Response:", response.data);
  };

  return (
    <form className="signin-container">
      <h2>Sign In</h2>
      <div className="input-container">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <span className="password-toggle" onClick={togglePasswordVisibility}>
          {showPassword ? "Hide" : "Show"}
        </span>
      </div>
      <button className="signin-button" onClick={handleSignin}>
        Sign In
      </button>
    </form>
  );
};

export default Signin;
