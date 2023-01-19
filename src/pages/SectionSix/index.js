import React from "react";
import "./style.css";
import { Col, Row } from "antd";
import img from "../../images/s_six.png";
import teamicon from "../../images/Team.png";
import {CheckCircleOutlined} from '@ant-design/icons';

function index() {
  return (
    <>
      <Row className="sectionsix-main" align="middle">
        <Col sm={24} md={24} lg={24} xl={24} xxl={24} align="middle">
          <p className="title-tag">Keep your team Organized and productive</p>
          <p className="title-tag">
            with
            <span className="title-tag-bold">
              palm<span className="title-tag-dot">.</span>hr
            </span>
            <span className="title-tag-size"> core</span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={8} xl={10} xxl={10} className="left-tag" align="middle" style={{paddingTop:"8%" }} >
          <div className="left-head-one-tag"  > 
            <p className="left-head-one"><img src={teamicon} alt="Team icon" className="teamicon" />PEOPLE MANAGEMENT</p>
          </div>
          <div>
            <p className="left-head-two">Streamline HR</p>
            <p className="left-head-two">
              Administration<span className="title-tag-dot">.</span>
            </p>
          </div>
          <div className="respons-img"> 
          <img src={img} alt="Not found" className="right-tag-img" />
          </div>
          <div className="left-list" >
             <ul>
              <li><CheckCircleOutlined style={{color:"#219387", paddingRight:"2%"}} />  Ess profiles & Data</li>
              <li><CheckCircleOutlined style={{color:"#529571", paddingRight:"2%"}}/>  Document Management</li>
              <li><CheckCircleOutlined style={{color:"#81965c", paddingRight:"2%"}} />  Organization Charts</li>
              <li><CheckCircleOutlined style={{color:"#b39845", paddingRight:"2%"}}/>  Team Insights & Reports</li>
              <li><CheckCircleOutlined style={{color:"#e29a30", paddingRight:"2%"}}/>  Asset Management</li>
            </ul>
            
          </div>
          <button className="left-tag-btn">Learn More</button>
        </Col>
        <Col xs={24} sm={24} md={24} lg={16} xl={14} xxl={14} align="middle">
         <div className="respons2-img"> <img src={img} alt="Not found" className="right-tag-img" />
         </div>
        </Col>
      </Row>
    </>
  );
}

export default index;
