import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { logout } from "../../state/actions/auth";
import { useDispatch, useSelector } from "react-redux";
function Navbar() {
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);
  return (
    <nav>
      <Link to="/home" exact>
        <h2 className={classes.Logo}>JackFruit</h2>
      </Link>
      <ul>
        <Link exact to="#">
          <span>Welcome {authReducer.user.name}</span>
        </Link>
        <Link onClick={() => dispatch(logout())} exact to="/profile">
          <span>Logout</span>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
