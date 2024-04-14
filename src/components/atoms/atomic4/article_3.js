import React from 'react';

const Article3 = ({addToCart}) => {
    return (
        <div className='div_article' style={{position:"relative"}}>
            <div className='div_article_item'>
                <p className='p_article'>
                    косметический набор
                </p>
            </div>
            <div className='div_article_item'>
                <p className='p_article'>2 550,00 руб.</p>
            </div>
            <div><button className='btn_art' onClick={addToCart}>добавить в корзину</button></div>
        </div>
    );
};

export default Article3;