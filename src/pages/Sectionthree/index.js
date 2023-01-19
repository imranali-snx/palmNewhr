import React from "react";
import fimg from "../../images/full.png";
import simg from "../../images/endeavor.png";
import timg from "../../images/Frame.png";
import fourimg from "../../images/Hala.png";
import fiveimg from "../../images/TMD.png";
import siximg from "../../images/hmny.png";
import sevenimg from "../../images/ZID.png";
import eightimg from "../../images/eightimg.png";

import "./style.css";
const index = () => {
  return (
    <>
      <div className="slider-p">
        <p>Trusted by Thousands of Employees Across the Middle East</p>
        <div class="marquee    ">
          <div class="marquee-content ">
            <div class="marquee-item ">
              <img className="opac " src={fimg} />
            </div>
            <div class="marquee-item">
              <img className="opac " src={simg} />
            </div>
            <div class="marquee-item">
              <img className="opac " src={timg} />
            </div>
            <div class="marquee-item">
              <img className="opac " src={fourimg} />
            </div>
            <div class="marquee-item">
              <img className="opac " src={fiveimg} />
            </div>
            <div class="marquee-item">
              <img className="opac " src={siximg} />
            </div>
            <div class="marquee-item">
              <img className="opac " src={sevenimg} />
            </div>
            <div class="marquee-item ">
              <img className="opac " src={fimg} />
            </div>
            <div class="marquee-item">
              <img className="opac " src={simg} />
            </div>
            <div class="marquee-item">
              <img className="opac " src={timg} />
            </div>
            <div class="marquee-item">
              <img className="opac " src={fourimg} />
            </div>
            <div class="marquee-item">
              <img className="opac " src={fiveimg} />
            </div>
            <div class="marquee-item">
              <img className="opac " src={siximg} />
            </div>
          </div>
        </div>
        <div className="sm-img">
          <div className="sm-sec">
            <img src={fimg} />
            <img src={simg} />
          </div>
          <div className="sm-sec">
            <img src={timg} />
            <img src={fourimg} />
          </div>
          <div className="sm-sec">
            <img src={fiveimg} />
            <img src={simg} />
          </div>
          <div className="sm-sec">
            <img src={sevenimg} />
            <img src={eightimg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
