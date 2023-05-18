import React, { useState } from "react";
import {
  validateUserName,
  validatePassword,
  validateEmail,
} from "../../utils/Utils";
import axiosInstance from "../../AxiosInstance";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    var er = "";
    if (!validateEmail(email)) {
      er = er + "email/";
    }

    if (!validatePassword(password)) {
      er = er + "password/";
    }

    if (!validateUserName(username)) {
      er = er + "username/";
    }

    if (photo == "") {
      er = er + "photo";
    }
    setMsg(er ? "Error " + er : "");

    if (
      validatePassword(password) &&
      validateEmail(email) &&
      validateUserName(username) &&
      photo != ""
    ) {
      axiosInstance
        .post("api/user/registration", {
          username: username,
          email: email,
          password: password,
          photo: photo,
        })
        .then((res) => {
          if (res.status === 200) {
            
            if (res.data.error != "") {
              setMsg(res.data.error);
            } 
            
            if(res.data.msg === "yes") {
                window.localStorage.setItem("token", res.data.token);
                var data = res.data?.data;
                data.photo = photo;
                localStorage.setItem("user_data", JSON.stringify(data));
                setEmail("");
                setPassword("");
                setUsername("");
                setPhoto("");
                navigate("/user/login");
              }
          } else {
            setMsg("Got Server error");
          }
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <form onSubmit={handleSubmit} id="regForm">
      <div>
        <h2 className="float-right"> Registration</h2>
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="photo">Photo:</label>
        <input
          type="file"
          id="photo"
          accept=".jpg, .jpeg, .png"
          onChange={(event) => {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onloadend = function () {
              setPhoto(reader.result);
            };
          }}
        />
      </div>
      <div>
        <span className="text-danger pl-3">{msg}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Registration;
