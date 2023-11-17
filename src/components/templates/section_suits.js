import React, {useState} from 'react';

import Magazin from "../atoms/atomic/magaz";
import {addItemToCart, removeItemCart} from "../../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import image18 from "../../img/image29.webp";
import image19 from "../../img/image28.webp";
import image20 from "../../img/image22.webp";
import image21 from "../../img/image23.webp";
import image22 from "../../img/image24.webp";
import image23 from "../../img/image25.webp";
import image24 from "../../img/image26.webp";
import image25 from "../../img/image27.webp";
import image26 from "../../img/image38.jpeg";
import image27 from "../../img/image30.webp";
import image28 from "../../img/image31.jpeg";
import image17 from "../../img/image37.webp";
import image29 from "../../img/image35.webp";
import image30 from "../../img/image34.webp";
import image32 from "../../img/image36.webp";
import image31 from "../../img/image32.webp"
import {posts} from "./section_image1";


export const posts2 = [
    {id : 17 , title:'белая рубашка' , price:'1 550,00 руб.', image: image17},
    {id : 18 , title:'черная спортивка' , price:'1 350,00 руб.', image: image18},
    {id : 19 , title:'классическая рубашка' , price:'1 550,00 руб.', image: image19},
    {id : 20 , title:'кожанная куртка' , price:'1850,00 руб.', image: image20},
    {id :21 , title:'оверсайз брюки' , price:'1950,00 руб.', image: image21},
    {id :22 , title:'оверсайз футболка' , price:' 850,00 руб.', image: image22},
    {id :23 , title:'класическая рубашка' , price:'2 750,00 руб.', image: image23},
    {id :24 , title:'класическая рубашка' , price:'2 500,00 руб', image: image24},
    {id :25 , title:'класические брюки' , price:'2 150,00 руб.', image: image25},
    {id :26 , title:'класический образ' , price:'4 200,00 руб', image: image26},
    {id :27 , title:'легкая рубашка' , price:'1 200,00 руб', image: image27},
    {id :28 , title:'черная рубашка' , price:'1 200,00 руб', image: image28},
    {id :29 , title:'синяя худи' , price:'2 200,00 руб', image: image29},
    {id :30 , title:'темная ветровка' , price:'1 400,00 руб', image: image30},
    {id :31 , title:'белая рубашка' , price:'1 200,00 руб', image: image31},
    {id :32 , title:'темный плащ' , price:'3 200,00 руб', image: image32},
]
const SectionSuits = () => {
    const [openMagazin , setOpenMagazin] = useState(false)

    const dispatch = useDispatch()
    const cardItem = useSelector(state => state.cart.items)












    const openMagaz = () => {
        setOpenMagazin(true)
    }
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
            <h2 className='page2_h2'>Каталог костюмов</h2>
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

export default SectionSuits;