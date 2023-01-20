import React from "react";
import "./style.css";
import HeartImage from "../../images/sectionfive.png";
import heartline from "../../images/heartgifline.gif";
import simg from "../../images/sm-image.png";
import calender from "../../images/Calender.png";
import { Button } from "antd";
const index = () => {
  return (
    <div style={{marginTop: 30}}>
      <div className="heartBeat">
        <p className="heartBeat-title">
          The Digital Heartbeat of Your Organisation.
        </p>
        <p className="heartBeat-para">
          Enhance productivity by centralizing employee data management,
          automating payroll processing, monitoring performance, and more on one
          single platform – all while benefitting from palm.hr’s unmatched
          customer service.
        </p>
        <img src={simg} className="sm-hb" />
        <img src={calender} className="sm-calender" />

        <img src={HeartImage} className="heartbeat-img" />
        <div className="heartline-div">
          <img src={heartline} className="heartbeat-imgline" />
        </div>
      </div>
      <Button className="heartBeat-btn">Watch palm.hr in Action</Button>
    </div>
  );
};

export default index;
