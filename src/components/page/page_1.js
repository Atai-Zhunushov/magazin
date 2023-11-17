import React from 'react';
import Header from "../templates/header";
import Section from "../templates/section";
import Section_2 from "../templates/section_2";
import Section_3 from "../templates/section_3";
import Section4 from "../templates/section_4";
import Footer from "../templates/footer";
import SectionImage1 from "../templates/section_image1";

const Page_1 = () => {
    return (
        <div>
            <Header/>
            <Section/>
            <Section_2/>
            <Section_3/>
            <Section4/>
            <Footer/>
        </div>
    );
};

export default Page_1;