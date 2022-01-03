import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [Email, SetEmail] = useState("");
  const [code, SetCode] = useState("");
  const [Password, SetPassword] = useState("");

  const emailHandler = (e) => {
    e.preventDefault();
    SetEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    SetPassword(e.target.value);
  };
  const codeHandler = (e) => {
    e.preventDefault();
    SetCode(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // state에 저장한 값을 가져옵니다.
    console.log(Email);
    console.log(Password);
    console.log(code);

    const body = {
      email: Email,
      school: Password,
      student_num: code,
    };

    console.log(body);
    axios.post("/hihi", body).then((res) => console.log(res));
  };

  return (
    <div id="home" className="big-bg">
      <header className="CG-logo">
        <a href="rog in.html">
          <img id="logo" src="../logo.png" width="87" height="109" alt="로고" />
        </a>
      </header>
      <div className="wrapper">
        <form action="/hihi" method="post" onSubmit={submitHandler}>
          <div>
            <label htmlFor="email" className="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="your-email"
              value={Email}
              placeholder="이메일을 입력하세요."
              onChange={emailHandler}
            />
          </div>
          <div>
            <label htmlFor="password" className="password">
              password
            </label>
            <input
              type="password"
              id="password"
              name="your-password"
              value={Password}
              placeholder="비밀번호를 입력하세요."
              onChange={passwordHandler}
            />
          </div>
          <div>
            <input value={code} onChange={codeHandler} />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="wrapper-button">
          <a className="button" href="index.html">
            로그인
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
