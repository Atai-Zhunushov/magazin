import React from 'react';
import shopping from '../../../img/shopping-bag 1.svg'
const Header44 = ({onOpenShop, count}) => {
    return (
        <div>
            <div className='shop'>
                <img src={shopping} alt="" onClick={onOpenShop}/>
            </div>
            <div className={`shopping_count ${count > 0 ? 'animated' : ''}`}>
                {count}
            </div>
        </div>
    );
};

export default Header44;