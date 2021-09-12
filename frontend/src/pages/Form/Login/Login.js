import React, { useState, useEffect } from "react";
import classes from "../Form.module.css";
import { login } from "../../../state/actions/auth";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    email.trim().length > 0 && password.trim().length > 0
      ? setDisable(false)
      : setDisable(true);
  }, [email, password]);

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <div className={classes.FormWrap}>
      <form className={classes.Form}>
        <h1>Login 👤</h1>

        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            name="email"
            spellCheck={false}
            autoComplete="off"
            value={email}
          />
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            name="password"
            spellCheck={false}
            value={password}
          />
        </div>

        <div>
          <button disabled={disable} onClick={onClickHandler}>
            LOGIN
          </button>
        </div>
        <p>
          Don't have account? <Link to="/signup">SignUp</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
