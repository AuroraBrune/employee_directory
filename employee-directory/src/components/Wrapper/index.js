import React from "react";
import "./style.css";
import MyComponent from "../EmployeesTable/index"

function Wrapper(props) {
  return (
  <div>
    <div className="wrapper">{props.children}</div>
    <MyComponent />
    </div>
  )};

export default Wrapper;
