import React from "react";
const Alert = ({ alert }) => {
  let style = {};
  if (alert.type === "success") {
    style = {
      background: "#93f58c",
      color: "white",
      textAlign: "center",
      padding: "1rem",
      fontWeight: "700",
    };
  } else {
    style = {
      background: "tomato",
      color: "white",
      textAlign: "center",
      padding: "1rem",
      fontWeight: "700",
    };
  }

  return <div style={style}>{alert.value}</div>;
};
export default Alert;
