import { Row, Col } from "antd";
import React from "react";
import sevenimg from "../../images/s_seven.png";
import Time from "../../images/Time.png";
import { CheckCircleOutlined } from "@ant-design/icons";
import "./style.css";
function index() {
  return (
    <Row className="section-seven">
      <Col xs={24} sm={24} md={24} lg={16} xl={14} xxl={14} align="middle">
       <div className="responsive-one"> <img src={sevenimg} alt="No Image" className="seven-left-img" />
       </div>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={8}
        xl={10}
        xxl={10}
        align="middle"
        style={{ paddingTop: "10%" }}
      >
        <div className="seven-right" >
       
          <div className="seven-right-tag">
            <p className="seven-right-title">
              <img src={Time} alt="no image" /> TIME MANAGEMENT
            </p>
            <div className="seven-div">
              <p className="seven-right-head-one">Intelligent</p>
              <p className="seven-right-head-one">
                Time Tracking <span className="dot-color">.</span>
              </p>
            </div>
          </div>
          <div className="responsive-two">
          <img src={sevenimg} alt="No Image" className="seven-left-img" />
          </div>
          <div className="seven-right-list">
            <ul>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#219387" }}
                />{" "}
                Ess profiles & Data
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#529571" }}
                />{" "}
                Document Management
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#81965c" }}
                />{" "}
                Organization Charts
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#b39845" }}
                />{" "}
                Team Insights & Reports
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#e29a30" }}
                />{" "}
                Asset Management
              </li>
            </ul>

          </div>
          {/* <div className="seven-right-btn"> */}
          {/* </div> */}
        <button className="seven-right-tag-btn">Learn More</button>
          
        </div>

      </Col>
    </Row>
  );
}

export default index;
