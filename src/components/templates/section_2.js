import React from 'react';
import Section1 from "../atoms/atomic2/section1";
import Section2 from "../atoms/atomic2/section2";
import Section3 from "../atoms/atomic2/section3";
import Section4 from "../atoms/atomic2/section4";


const Section_2 = () => {
    return (
        <div className='section_2 container'>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
        </div>
    );
};

export default Section_2;