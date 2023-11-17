import React, {useState} from 'react';

import user from '../../../img/user (4) 1.svg';


const Header4 = ({onOpenModal}) => {
    return (
        <div>
            <div>
                <img src={user} alt="" onClick={onOpenModal} className="header_img_list"/>
            </div>
        </div>
    );
};

export default Header4;