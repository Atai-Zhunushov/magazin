import React from 'react';

const Article4 = ({addToCart}) => {
    return (
        <div className='div_article' style={{position:"relative"}}>
            <div className='div_article_item'>
                <p className='p_article'>
                   белый пуховик
                </p>
            </div>
            <div className='div_article_item'>
                <p className='p_article'>1 550,00 руб.</p>
            </div>
            <button className='btn_art' onClick={addToCart}>добавить в корзину</button>
        </div>
    );
};

export default Article4;