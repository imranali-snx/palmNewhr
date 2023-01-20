import { Row, Col } from "antd";
import React from "react";
import Time from "../../images/Time.png";
import formimg from "../../images/expense.png";
import { CheckCircleOutlined } from "@ant-design/icons";
import "./style.css";
// import bg9 from "../../images/bg9.png";
// import formicon from "../../images/formicon2.png";
// import formicon3 from "../../images/formicon3.png";
// import formimg from "../../images/formimg.png";
// import formicon1 from "../../images/formicon1.png";
import Groupform from "../../images/Groupform.png";
import Groupformtwo from "../../images/Groupformtwo.png"
// import { DatePicker, Checkbox, Form, Input, Button, Space } from "antd";
// import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

function index() {
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  return (
    <Row className="section-nine">
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={15}
        xl={13}
        xxl={13}
        align="middle"
        className="section-nine-left"
      >
        <Row className="form-tag">
          {/* <img src={Groupform}/> */}
          <img src={formimg} />
        </Row>
        <Row className="nine-img"></Row>

        
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={9}
        xl={11}
        xxl={11}
        align="middle"
        style={{ paddingTop: "4%",paddingBottom:"5%" }}
      >
        <div className="nine-right" align="middle">
          <div className="nine-right-tag">
            <p className="nine-right-title">
              <img src={Time} alt="no image" /> TALENT MANAGEMENT
            </p>
            <div className="nine-div">
              <p className="nine-right-head-one">Create a Workplace</p>
              <p className="nine-right-head-one">
                You Can Call Home <span className="dot-color">.</span>
              </p>
            </div>
          </div>
          <div className="nine-responsive-two">
            <img src={Groupformtwo} alt="Form image" />
          </div>
          <div className="nine-right-list">
            <ul>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#219387" }}
                />{" "}
                Onboarding / Offboarding
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#529571" }}
                />{" "}
                ESS Online Requests
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#81965c" }}
                />{" "}
                Internal Communications
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#b39845" }}
                />{" "}
                Performance Management
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#e29a30"}}
                />{" "}
                EOS & Benefits Management
              </li>
            </ul>
          </div>
          <div className="nine-right-btn">
            <button className="nine-right-tag-btn">Learn More</button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default index;
