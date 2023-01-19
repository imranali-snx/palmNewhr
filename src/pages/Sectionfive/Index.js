import React from "react";
import "./style.css";
import mudad from "../../images/mudad.png";
import muqeem from "../../images/muqeem.png";
import gosi from "../../images/gosi.png";
import { Button } from "antd";
const Index = () => {
  return (
    <div className="main-head">
      <p className="title">BUILT-IN INTEGRATIONS</p>
      <p className="sm-heading">Seamless Local Integrations that Protect your Business from Penalties and Streamline Your HR Administration.</p>
      <p className="heading">Integrated with Mudad, GOSI and Muqeem.</p>
      <p className="descrip">
        Integrations that Protect your Business from Penalties and Streamline
        Your HR Administration.
      </p>
      <div className="main-box">
        <div className="box">
          <img src={muqeem} />
          <p>KSA Integrations (Muqeem)</p>
        </div>
        <div className="box">
          <img src={mudad} />
          <p>KSA WPS Compliance (Mudad)</p>
        </div>
        <div className="box">
          <img src={gosi} />
          <p>KSA Integrations (GOSI)</p>
        </div>
      </div>
      <Button className="box-btn">Learn More</Button>
        
    </div>
  );
};

export default Index;
