import React, { useState } from "react";
import login from "../../images/login.png";
import "./style.css";
import ReactFlagsSelect from "react-flags-select";
import "./flags.css";
const Index = () => {
  const [select, setSelect] = useState("SE");
  const onSelect = (code) => {
    setSelect(code);
  };
  return (
    <div className="top-header">
      <div className="header">
        <ul className="heading-ul">
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
          <li>
            <a>Help Desk</a>
          </li>
          <li className="login">
            <img src={login} className="login-img" />
            <a>Login</a>
          </li>
          
        </ul>
        <ReactFlagsSelect
              selected={select}
              onSelect={onSelect}
              countries={["fi", "GB", "IE", "IT", "NL", "SE"]}
            />
      </div>
      
    </div>
  );
};

export default Index;
