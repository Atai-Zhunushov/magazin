import React from 'react';

const Article6 = ({addToCart}) => {
    return (
        <div className='div_article' style={{position:"relative"}}>
            <div className='div_article_item'>
                <p className='p_article'>
                    толстовка оверсайз
                </p>
            </div>
            <div className='div_article_item'>
                <p className='p_article'>2 550,00 руб.</p>
            </div>
            <div><button className='btn_art' onClick={addToCart}>добавить в корзину</button></div>
        </div>
    );
};

export default Article6;