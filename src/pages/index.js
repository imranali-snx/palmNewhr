import * as React from "react";
import Sectionone from '../pages/Sectionone'
import Sectiontwo from '../pages/Sectiontwo'
import Sectionthree from '../pages/Sectionthree'
import Sectionfour from '../pages/Sectionfour'
import Sectionfive from '../pages/Sectionfive'
import Section7 from '../pages/Section7'


import SectionSix from '../pages/SectionSix';
import SectionSeven from '../pages/SectionSeven';
import SectionEight from '../pages/SectionEight';
import SectionNine from '../pages/SectionNine';
import SectionTen from '../pages/SectionTen';


import SectionEleven from "./SectionEleven";
import SectionTwelve from "./SectionTwelve";
import SectionThirteen from "./SectionThirteen";
import SectionForteen from "./SectionForteen";
import SectionHeader from "./SectionHeader";
import "./global.css";

const IndexPage = () => {
  return (
    <>
     <Sectionone/>
     <SectionHeader />

     <Sectiontwo/>
     <Sectionthree/>
     <Sectionfour/>
     <Sectionfive/>
   
     <Section7/>
    <SectionSix/>
    < SectionSeven/>
    < SectionEight/>
    < SectionNine/>
    < SectionTen/>

      <SectionEleven />
      <SectionTwelve />
      <SectionThirteen />
      <SectionForteen /> 
    </>
  );
};
export default IndexPage;