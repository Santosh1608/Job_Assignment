import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import classes from "./Tax.module.css";
function Tax() {
  const { tax } = useSelector((state) => state.salaryReducer);

  return tax ? (
    <div className={classes.Tax}>
      <div>
        <h1>
          Taxable Income : <span>{Number(tax).toFixed(2)}</span>
        </h1>
      </div>
    </div>
  ) : (
    <Redirect to="/home" />
  );
}

export default Tax;
