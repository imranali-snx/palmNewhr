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
        lg={9}
        xl={11}
        xxl={11}
        align="middle"
        className="left-tag"
        style={{ paddingTop: "8%" }}
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
                style={{ color: "#219387", paddingRight: "2%" }}
              />{" "}
              Multi-Country Payroll
            </li>
            <li>
              <CheckCircleOutlined
                style={{ color: "#529571", paddingRight: "2%" }}
              />{" "}
             WPS Payroll Automation
            </li>
            <li>
              <CheckCircleOutlined
                style={{ color: "#81965c", paddingRight: "2%" }}
              />{" "}
              Payroll Insights & Reports
            </li>
            <li>
              <CheckCircleOutlined
                style={{ color: "#b39845", paddingRight: "2%" }}
              />{" "}
              Expenses Management
            </li>
            <li>
              <CheckCircleOutlined
                style={{ color: "#e29a30", paddingRight: "2%" }}
              />{" "}
              Loan Management
            </li>
          </ul>
        </div>
        <button className="eight-left-tag-btn">Learn More</button>
      </Col>
      <Col xs={24} sm={24} md={24} lg={15} xl={13} xxl={13} align="middle">
        <div className="eight-resposive-two">
        <img src={eightimg} alt="Not found" className="right-tag-img" />
        </div>
      </Col>
    </Row>
  );
}

export default index;
