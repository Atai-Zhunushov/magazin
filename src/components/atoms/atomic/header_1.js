import React, {useState} from 'react';
import Group12 from '../../../img/Group12(1).svg'
import {Link} from "react-router-dom";


const Header1 = () => {
    const [list , setList] = useState(false)

    const listFunc = () => {
        setList(!list)
        console.log("listFunc is called");
    }



    return (
        <div>
            <div className='header_1'>
                <img src={Group12} alt="" onClick={listFunc} className='menu_img'/>
                <p>Меню</p>
            </div>
            <div className={`sidebar ${list ? 'open' : ''}`} >
                {list ? <div className='list_p' onClick={listFunc}>&times;</div> : null}
                <ul className='ul_list'>
                    <Link to='/' className='li_list'>
                        <li> Главная</li>
                    </Link>
                    <Link to='/page2' className='li_list'>
                        <li>Женское</li>
                    </Link>
                    <Link to='/page3' className='li_list'>
                        <li>Мужское</li>
                    </Link>

                    <li>костюмы</li>
                    <li>рубашки</li>
                    <li>футболки</li>
                    <li>брюки</li>
                    <li>платья</li>
                </ul>
            </div>
        </div>
    );
};

export default Header1;