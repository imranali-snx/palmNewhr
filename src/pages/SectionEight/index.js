import { Row, Col } from "antd";
import React from "react";
import eightimg from "../../images/s_eight.png";
import Pay from "../../images/Pay.png";
import { CheckCircleOutlined } from "@ant-design/icons";
import "./style.css";

function index() {
  return (
    <Row className="section-eight-tag">
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={8}
        xl={10}
        xxl={10}
        align="middle"
        className="left-tag"
        style={{ paddingTop: "10%",paddingLeft:"5%" }}
      >
        <div className="eight-left-head-one-tag">
          <p className="eight-left-head-one">
            <img src={Pay} alt="Team icon" className="eight-teamicon" />
            COMPENSATION MANAGEMENT
          </p>
        </div>
        <div className="eight-left-head-two-tag">
          <p className="eight-left-head-two">Salaries on Time,</p>
          <p className="eight-left-head-two">
            Error Free<span className="eight-title-tag-dot">.</span>
          </p>
        </div>
        <div className="eight-resposive-one">
        <img src={eightimg} alt="Not found" className="eight-right-tag-img" />
        </div>
        <div className="eight-left-list">
          <ul>
            <li>
              <CheckCircleOutlined
                style={{ color: "#219387" }}
              />{" "}
              Multi-Country Payroll
            </li>
            <li>
              <CheckCircleOutlined
                style={{ color: "#529571" }}
              />{" "}
             WPS Payroll Automation
            </li>
            <li>
              <CheckCircleOutlined
                style={{ color: "#81965c" }}
              />{" "}
              Payroll Insights & Reports
            </li>
            <li>
              <CheckCircleOutlined
                style={{ color: "#b39845" }}
              />{" "}
              Expenses Management
            </li>
            <li>
              <CheckCircleOutlined
                style={{ color: "#e29a30" }}
              />{" "}
              Loan Management
            </li>
          </ul>
        </div>
        <button className="eight-left-tag-btn">Learn More</button>
      </Col>
      <Col xs={24} sm={24} md={24} lg={16} xl={14} xxl={14} align="middle">
        <div className="eight-resposive-two">
        <img src={eightimg} alt="Not found" className="right-tag-img" />
        </div>
      </Col>
    </Row>
  );
}

export default index;
