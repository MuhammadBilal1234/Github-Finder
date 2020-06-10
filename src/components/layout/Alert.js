import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertcontext";

const Alert = () => {
  const alertcontext = useContext(AlertContext);

  const { alert } = alertcontext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>{alert.msg}</div>
    )
  );
};

export default Alert;
