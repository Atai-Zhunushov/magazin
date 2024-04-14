import React from 'react';
import Group12 from '../../../img/Group12(1).svg'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {openList, closeList} from "../../../store/openListSlice";
import {Drawer} from "@mui/material";


const Header1 = () => {
    const dispatch = useDispatch()
    const list = useSelector(state => state.openList.setList)

    const listFunc = () => {
        if (list) {
            dispatch(closeList())
        } else if (!list) {
            dispatch(openList())
        }
    }



    return (
        <div>
            <div className='header_1'>
                <img src={Group12} alt="" onClick={listFunc} className='menu_img'/>
                <p className="header_1_p">Меню</p>
            </div>
            <div className={`sidebar ${list ? 'open' : ''}`} >
                {list ? <div className='list_p' onClick={listFunc}>&times;</div> : null}
                <ul className='ul_list' onClick={listFunc}>
                    <Link to='/' className='li_list'>
                        <li> Главная</li>
                    </Link>
                    <Link to='/page2' className='li_list'>
                        <li>Женское</li>
                    </Link>
                    <Link to='/page3' className='li_list'>
                        <li>Мужское</li>
                    </Link>

                    <Link to={'/page4'} className='li_list'>
                        <li>парфюмы</li>
                    </Link>
                    <Link to={'/page5'} className='li_list'>
                        <li>гели</li>
                    </Link>


                </ul>
            </div>

        </div>
    );
};

export default Header1;