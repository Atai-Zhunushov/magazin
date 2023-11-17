import React, {useState} from 'react';
import Header1 from "../atomic/header_1";
import {useDispatch, useSelector} from "react-redux";
import {openList, closeList} from "../../../store/openListSlice";

const Center3 = () => {

    const isList = useSelector(state => state.openList.setList)
    const dispatch = useDispatch()
    const openListOpen = () => {
        if (isList) {
            dispatch(closeList())
        } else  {
            dispatch(openList())
        }
    }
    return (
        <div className='center_div_3'>
            <button className='btn_1' onClick={openListOpen}>Перейти в каталог</button>
            {isList && <Header1/>}

        </div>
    );
};

export default Center3;