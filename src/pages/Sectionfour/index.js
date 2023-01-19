import React from "react";
import { Col, Row } from "antd";
import videoleft from "../../images/videoimgleft.png";
import video from "../../images/video.mp4";
import thumb from "../../images/videothumbnail.png";
import "./style.css";
const index = () => {
  return (
    <div>
      <Row className="back-videosec">
        <Col
          xxl={12}
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          className="video-sec-padding"
        >
          <p className="videosec-p">
            “palm.hr is the HR managers dream. From day 1, palm.hr has helped us
            implement legal requirements and set new standards for employee
            experience.”
          </p>
          <h2 className="videosec-h">Muhammad Al Biani</h2>
          <p className="videosec-p">Chief Executive Officer at ENDEAVOR</p>
          <img src={videoleft} />
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <video   className="video" poster={thumb} controls>
            <source src={video} type="video/mp4" />
          </video>
        </Col>
      </Row>
    </div>
  );
};

export default index;
