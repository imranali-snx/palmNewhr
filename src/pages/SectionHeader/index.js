import React, { useRef } from "react";
import { Button } from "antd";

import "../SectionHeader/style.css";
import h1 from "../../images/h1.png";
import h2 from "../../images/h2.png";
import g1 from "../../images/g1.png";
import g2 from "../../images/g2.png";
import { CloseOutlined } from "@ant-design/icons";

export default function Index() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header>
        <img src={h1}></img>

        <div className="h9-css">
          <a href="/#" className="h-text2">
            {" "}
            <span className="h-text">
              Our Products
              <img src={g2} className="imh-t" />
            </span>
          </a>
          <a href="/#" className="h-text2">
            <span className="h-text">
              Who we serve
              <img src={g2} className="imh-t" />
            </span>
          </a>
          <a href="/#" className="h-text2">
            <span className="h-text">
              Resources
              <img src={g2} className="imh-t" />
            </span>
          </a>
          <a href="/#" className="h-text2">
            <span className="h-text">Pricing</span>
          </a>
        </div>
        <div className="h10-css">
          <img className="img-tell" src={h2} />
          <a href="tel:+966 11 520 2868" className="h-tell">
            <span className="span-h">+966 11 520 2868</span>
          </a>
          <Button className="h-button">Get Started</Button>
        </div>

        <nav ref={navRef}>
          <a href="/#">Our Products</a>
          <a href="/#">Who we serve</a>
          <a href="/#">Resources</a>
          <a href="/#">Pricing</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <CloseOutlined style={{ color: "black" }} />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <img className="img-y" src={g1} />
        </button>
      </header>
    </>
  );
}
