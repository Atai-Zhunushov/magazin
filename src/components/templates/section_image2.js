import React, {useState} from 'react';
import image1 from "../../img/image29.webp";

import image2 from "../../img/image28.webp";
import image3 from "../../img/image22.webp";
import image4 from "../../img/image23.webp";
import image5 from "../../img/image24.webp";
import image6 from "../../img/image25.webp";
import image7 from "../../img/image26.webp";
import image8 from "../../img/image27.webp";
import image9 from "../../img/image38.jpeg";
import image10 from "../../img/image30.webp";
import image11 from "../../img/image31.jpeg";
import image0 from "../../img/image32.webp";
import image14 from "../../img/image34.webp";
import image15 from "../../img/image35.webp";
import image16 from "../../img/image36.webp";
import image17 from "../../img/image37.webp";
import Magazin from "../atoms/atomic/magaz";
import {addItemToCart, removeItemCart} from "../../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";


const SectionImage2 = () => {
    const [openMagazin , setOpenMagazin] = useState(false)
    const [posts2 , setPosts2] = useState([
        {id : 17 , title:'белая рубашка' , price:'1 550,00 руб.', image: image0},
        {id : 18 , title:'черная спортивка' , price:'1 350,00 руб.', image: image1},
        {id : 19 , title:'классическая рубашка' , price:'1 550,00 руб.', image: image2},
        {id : 20 , title:'кожанная куртка' , price:'1850,00 руб.', image: image3},
        {id :21 , title:'оверсайз брюки' , price:'1950,00 руб.', image: image4},
        {id :22 , title:'оверсайз футболка' , price:' 850,00 руб.', image: image5},
        {id :23 , title:'класическая рубашка' , price:'2 750,00 руб.', image: image6},
        {id :24 , title:'класическая рубашка' , price:'2 500,00 руб', image: image7},
        {id :25 , title:'класические брюки' , price:'2 150,00 руб.', image: image8},
        {id :26 , title:'класический образ' , price:'4 200,00 руб', image: image9},
        {id :27 , title:'легкая рубашка' , price:'1 200,00 руб', image: image10},
        {id :28 , title:'черная рубашка' , price:'1 200,00 руб', image: image11},
        {id :29 , title:'класические рубашка' , price:'2 200,00 руб', image: image17},
        {id :30 , title:'темная ветровка' , price:'1 400,00 руб', image: image14},
        {id :31 , title:'синяя худи' , price:'1 200,00 руб', image: image15},
        {id :32 , title:'темный плащ' , price:'3 200,00 руб', image: image16},
        // {id :17 , title:'голубое худи' , price:'1 200,00 руб'},
        // {id :18 , title:'голубое худи' , price:'1 200,00 руб'},
        // {id :19 , title:'голубое худи' , price:'1 200,00 руб'},
        // {id :20 , title:'голубое худи' , price:'1 200,00 руб'},
        // {id :21 , title:'голубое худи' , price:'1 200,00 руб'},
    ])
    const dispatch = useDispatch()
    const cardItem = useSelector(state => state.cart.items)




    const closeMagaz = () => {
        setOpenMagazin(false)
    }
    const addToCards = (item) => {
        dispatch(addItemToCart(item))

        console.log(item)
    }
    const removeItem = (itemId) => {
        dispatch(removeItemCart(itemId));
    }
    return (
        <div>
            <h2 className='page2_h2'>Каталог мужской одежды</h2>
            <div className='page_2_div'>
                    {posts2.map((post) => (
                        <div key={post.id} className='image_page2'>
                            <img src={post.image} alt="" className='image_4'/>
                            <div className="div_article">
                                <div className="div_article_item">
                                    <p className='p_article'>{post.title}</p>
                                </div>
                                <div className="div_article_item">
                                    <p className='p_article'>{post.price}</p>
                                </div>
                                <button className='btn_art' onClick={() => addToCards({id:post.id,  image:post.image, name:post.title, price:post.price})}>добавить в корзину</button>
                            </div>
                        </div>
                    ))}
            </div>

            {cardItem.length > 0 && openMagazin && <Magazin selectedItems={cardItem}  openModal={openMagazin} close={closeMagaz} removeItem={removeItem}/>}
        </div>
    );
};

export default SectionImage2;