import * as React from "react";
import Sectionone from "./Sectionone";
import Sectiontwo from "./Sectiontwo";
import Sectionthree from "./Sectionthree";
import Sectionfour from "./Sectionfour";
// import Sectionfive from "./Sectionfive";
import Section7 from "./Section7";

import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";
import SectionNine from "./SectionNine";
import SectionTen from "./SectionTen";

import SectionEleven from "./SectionEleven";
import SectionTwelve from "./SectionTwelve";
import SectionThirteen from "./SectionThirteen";
import SectionForteen from "./SectionForteen";
import SectionHeader from "./SectionHeader";
import "./global.css";

const IndexPage = () => {
  return (
    <>
      <Sectionone />
      <SectionHeader />

      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
      {/* <Sectionfive /> */}
      <Section7 />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <SectionEleven />
      <SectionTwelve />
      <SectionThirteen />
      <SectionForteen />
    </>
  );
};
export default IndexPage;
