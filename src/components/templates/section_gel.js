import React, {useState} from 'react';

import Magazin from "../atoms/atomic/magaz";
import {addItemToCart, removeItemCart} from "../../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";

import image11 from "../../image_sher/sher_21.webp";
import image12 from "../../image_sher/sher_22.webp";
import image13 from "../../image_sher/sher_23.webp";
import image14 from "../../image_sher/sher_24.webp";
import image15 from "../../image_sher/sher_25.webp";
import image16 from "../../image_sher/sher_26.webp";
import image17 from "../../image_sher/sher_27.webp";
import image18 from "../../image_sher/sher_28.webp";
import image19 from "../../image_sher/sher_29.webp";
import image20 from "../../image_sher/sher_30.webp";
import {Input, useMediaQuery} from "@mui/material";
import {posts} from "./section_image1";


export const posts2 = [
    {id : 11 , title:'набор для ухода для волос' , price:'1 550,00 руб.', image: image11},
    {id : 12 , title:'набор от Chanel' , price:'1 350,00 руб.', image: image12},
    {id : 13 , title:'гель для душа' , price:'1 550,00 руб.', image: image13},
    {id : 14 , title:'мужской набор' , price:'1850,00 руб.', image: image14},
    {id :15 , title:'эффективный уход за бородой' , price:'1950,00 руб.', image: image15},
    {id :16 , title:'подарочный набор для ухода' , price:' 850,00 руб.', image: image16},
    {id :17 , title:'подарочный набор FOR HIM' , price:'2 750,00 руб.', image: image17},
    {id :18 , title:'классичекий набор от Metropolis' , price:'2 500,00 руб', image: image18},
    {id :19 , title:'гидрофильное масло' , price:'2 150,00 руб.', image: image19},
    {id :20 , title:'подарочный набор гелей' , price:'4 200,00 руб', image: image20},
]

const SectionSuits = () => {
    const [openMagazin , setOpenMagazin] = useState(false)
    const allPosts = [...posts, ...posts2];
    const isMobile = useMediaQuery('(max-width:500px)');
    const filterValue = useSelector(state => state.filter)

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

    const filteredData = allPosts
        .filter((item) => item.title.toLowerCase().includes('гел'))
        .filter((item) => {
            const formattedPrice = item.price.replace(/\s+/g, '').replace(',', '.');
            const isPriceMatchLogic = parseFloat(formattedPrice);
            return isPriceMatchLogic.toString().includes(filterValue.toLowerCase()) ||
                item.title.toLowerCase().includes(filterValue.toLowerCase());

        })
    return (
        <div>
            <Input/>
            <h2 className='page2_h2'>Каталог гелей</h2>
            <div className='page_2_div'>
                {filteredData.map((post) => (
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