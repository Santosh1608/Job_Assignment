import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../../state/actions/auth";
import classes from "../Form.module.css";
import { Link } from "react-router-dom";

function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(true);
  const [nameChecked, setNameChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [emailChecked, setEmailChecked] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(true);
  const [passwordChecked, setPasswordChecked] = useState(false);

  const [nameWarning, setNameWarning] = useState(false);
  const [emailWarning, setEmailWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);

  const [disable, setDisable] = useState(true);
  useEffect(() => {
    if (!nameError) {
      setNameWarning(false);
    }
    if (!emailError) {
      setEmailWarning(false);
    }
    if (!passwordError) {
      setPasswordWarning(false);
    }
    !nameError && !passwordError && !emailError
      ? setDisable(false)
      : setDisable(true);
  }, [nameError, emailError, passwordError]);
  const onChangeHandler = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
      setNameChecked(true);
      if (e.target.value.trim().length > 0) {
        setNameError(false);
      } else {
        setNameError(true);
      }
    }

    if (e.target.name === "email") {
      setEmail(e.target.value);
      setEmailChecked(true);
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(e.target.value)) {
        setEmailError(false);
      } else {
        setEmailError(true);
      }
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
      setPasswordChecked(true);
      const pw = e.target.value;
      if (
        /[A-Z]/.test(pw) &&
        /[a-z]/.test(pw) &&
        /[0-9]/.test(pw) &&
        /[^A-Za-z0-9]/.test(pw) &&
        pw.length > 7
      ) {
        setPasswordError(false);
      } else {
        setPasswordError(true);
      }
    }
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(signup({ name, email, password }));
  };
  let nameErr = nameError && nameChecked ? classes.nameError : null;
  let emailErr = emailError && emailChecked ? classes.emailError : null;
  let passwordErr =
    passwordError && passwordChecked ? classes.passwordError : null;
  return (
    <div className={classes.FormWrap}>
      <form className={classes.Form}>
        <h1> SignUp👤</h1>
        <p
          style={{ display: nameWarning ? "block" : "none" }}
          className={classes.Warning}
        >
          𝖓𝖆𝖒𝖊 𝖎𝖘 𝖗𝖊𝖖𝖚𝖎𝖗𝖊𝖉
        </p>
        <div className={nameErr}>
          <input
            onChange={onChangeHandler}
            type="text"
            placeholder="Username"
            name="name"
            spellCheck={false}
            value={name}
            autoComplete="off"
          />
          <span
            style={{
              fontSize: "1.3rem",
              color: "red",
              display: nameChecked ? "inline" : "none",
            }}
          >
            {nameError ? (
              <i
                onClick={(e) => setNameWarning((state) => !state)}
                className="fas fa-exclamation-circle"
              ></i>
            ) : (
              <i style={{ color: "green" }} className="fas fa-check-circle"></i>
            )}
          </span>
        </div>
        <p
          style={{
            display: emailWarning ? "block" : "none",
          }}
          className={classes.Warning}
        >
          𝖊𝖓𝖙𝖊𝖗 𝖈𝖔𝖗𝖗𝖊𝖈𝖙 𝖊𝖒𝖆𝖎𝖑
        </p>
        <div className={emailErr}>
          <input
            onChange={onChangeHandler}
            type="text"
            placeholder="Email"
            name="email"
            spellCheck={false}
            value={email}
            autoComplete="off"
          />
          <span
            style={{
              fontSize: "1.3rem",
              color: "red",
              display: emailChecked ? "inline" : "none",
            }}
          >
            {emailError ? (
              <i
                onClick={(e) => setEmailWarning((state) => !state)}
                className="fas fa-exclamation-circle"
              ></i>
            ) : (
              <i style={{ color: "green" }} className="fas fa-check-circle"></i>
            )}
          </span>
        </div>
        <p
          style={{
            display: passwordWarning ? "block" : "none",
          }}
          className={classes.Warning}
        >
          𝖕𝖆𝖘𝖘𝖜𝖔𝖗𝖉 𝖘𝖍𝖔𝖚𝖑𝖉 𝖈𝖔𝖓𝖙𝖆𝖎𝖓 𝖒𝖎𝖓𝖎𝖒𝖚𝖒 𝖔𝖋 8 𝖈𝖍𝖆𝖗𝖆𝖈𝖙𝖊𝖗𝖘,1
          𝖚𝖕𝖕𝖊𝖗𝖈𝖆𝖘𝖊,𝖑𝖔𝖜𝖊𝖗𝖈𝖆𝖘𝖊,1 𝖓𝖚𝖒𝖇𝖊𝖗 𝖆𝖓𝖉 1 𝖘𝖕𝖊𝖈𝖎𝖆𝖑 𝖈𝖍𝖆𝖗𝖆𝖈𝖙𝖊𝖗
        </p>
        <div className={passwordErr}>
          <input
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
            name="password"
            spellCheck={false}
            value={password}
          />
          <span
            style={{
              fontSize: "1.3rem",
              color: "red",
              display: passwordChecked ? "inline" : "none",
            }}
          >
            {passwordError ? (
              <i
                onClick={(e) => setPasswordWarning((state) => !state)}
                className="fas fa-exclamation-circle"
              ></i>
            ) : (
              <i style={{ color: "green" }} className="fas fa-check-circle"></i>
            )}
          </span>
        </div>
        <div>
          <button disabled={disable} onClick={onClickHandler}>
            SignUp
          </button>
        </div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
