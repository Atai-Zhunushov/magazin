import React from 'react';
import Header from "../templates/header";
import SectionImage2 from "../templates/section_image2";
import SectionImage1 from "../templates/section_image1";
import Footer from "../templates/footer";
import Input from "../atoms/atomic/input";
import SectionImageAll from "../templates/sectionImageAll";

const Page = () => {
    return (
        <div>
            <Header/>
            <SectionImageAll/>
            <Footer/>
        </div>
    );
};

export default Page;