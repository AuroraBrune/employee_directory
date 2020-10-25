import React from "react";
import "./style.css";
import EmployeesTable from "../EmployeesTable/index";
import Search from "../Search/index";
import Data from '../../employees.json';

function Wrapper() {
  // const [searchText, setSearchText] = useState("");

  const onClick = (text) => {
    //this is where I am triggering a filter
    
  };

  return (
    <div>
      <div className="wrapper">
        <Search onClick={onClick}/>
        <EmployeesTable data={Data} />
      </div>
    </div>
  )
};

export default Wrapper;
