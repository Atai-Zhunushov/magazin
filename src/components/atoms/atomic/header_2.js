import React from 'react';
import {Link} from "react-router-dom";


const Header2 = () => {
    return (
        <div className='header_2'>
            <Link to='/' className='p_header'>Home</Link>
            <Link to='/page2' className='p_header'>Женское</Link>
            <Link to='/page3' className='p_header'>Мужское</Link>
        </div>
    );
};

export default Header2;