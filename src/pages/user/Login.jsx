import React, { useState } from "react";
import { validateEmail, validatePassword } from "../../utils/Utils";
import axiosInstance from "../../AxiosInstance";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg,setMsg] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    var er = ""
    if (!validateEmail(email)) {
      er = er+ "email/"
    }

    if (!validatePassword(password)) {
      er = er+"password/"
    }
    setMsg(er)

    if (validateEmail(email) && validatePassword(password)) {
      axiosInstance
        .post("api/user/login", {
          password: password,
          email: email,
        })
        .then((res) => {
          if (res.status === 200 && res.data.token != '') {
            if(res.data.msg == "no" || res.data.data === null){
                 setMsg("Your email/password wrong")
            }else{
                localStorage.setItem("user_data",JSON.stringify(res.data.data))
                window.localStorage.setItem("token", res.data.token);
                setEmail("");
                setPassword("");
                window.location.href = "/blogs"
            
            }
          
          }else{
            setMsg("Got Server error")
          }
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <form onSubmit={handleSubmit} id="logForm">
    <div>
        <h2 className=""> Login</h2>
    </div>
      <div>
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div>
          <span  className="text-danger pl-3">{msg}</span>
         </div> 
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
