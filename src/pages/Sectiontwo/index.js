import React from "react";
import { Col, Row } from "antd";
import herosec from "../../images/Herosection.png";
import { Button } from "antd";
import herofirst from "../../images/herothirdbullet.png";
import herosecond from "../../images/herosecondbullet.png";
import herothird from "../../images/herothirdbullet.png";
import heroleft from "../../images/heroleft.png";
import "./style.css";
const index = () => {
  return (
    <div className="heroSection">
      <div className="lefthero">
        <img src={heroleft} />
      </div>
      <Row className="background-hero">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="position-hero">
            <div className="leftmargin-hero">
              <p className="first-line">
                HRMS for Companies of all Sizes in Saudi Arabia
              </p>
              <h2 className="title-hero">Lorem Ipsum Dolor Sit Amet.</h2>
              <p className="second-line">
                End-to-End Solution for Everything HR.
              </p>
              <div className="hero-btn">
                <Button className="hero-firstbtn">Book a Free Demo</Button>
                <Button className="hero-secondbtn">60-Seconds Preview</Button>
              </div>
            </div>

            <div className="hero-bullets">
              <ul>
                <li>
                  <img src={herofirst} />
                  <p>Fast Implementation</p>
                </li>
                <li>
                  <img src={herosecond} />

                  <p>100% Secure</p>
                </li>
                <li>
                  <img src={herothird} />

                  <p>Customer Service Excellence</p>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col
          xxl={12}
          xl={12}
          lg={24}
          md={24}
          sm={24}
          xs={24}
          className="heroSection-img"
        >
          <img src={herosec} />
          <div className="hero-btn-sec">
                <Button className="hero-firstbtn">Book a Free Demo</Button>
                <Button className="hero-secondbtn">60-Seconds Preview</Button>
              </div>
              <div className="hero-bullets-sec">
              <ul>
                <li>
                  <img src={herofirst} />
                  <p>Fast Implementation</p>
                </li>
                <li>
                  <img src={herosecond} />

                  <p>100% Secure</p>
                </li>
                <li>
                  <img src={herothird} />

                  <p>Customer Service Excellence</p>
                </li>
              </ul>
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default index;
