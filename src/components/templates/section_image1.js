import React, {useState} from 'react';
import image1 from "../../img/image2.jpeg";
import image2 from "../../img/image3.jpeg";
import image3 from "../../img/image4.jpeg";
import image4 from "../../img/image11.jpeg";
import image5 from "../../img/image12.jpeg";
import image6 from "../../img/image14.jpeg";
import image7 from "../../img/image20.jpeg";
import image9 from "../../img/image39.webp";
import image10 from "../../img/image40.jpeg";
import image11 from "../../img/image41.webp";
import image12 from "../../img/image42.webp";
import image13 from "../../img/image43.webp";
import image14 from "../../img/image44.webp";
import image15 from "../../img/image45.jpeg";
import image16 from "../../img/image46.webp";
import image8 from "../../img/image21.jpeg";
import Magazin from "../atoms/atomic/magaz";
import Header_4_4 from "../atoms/atomic/header_4_4";
import {addItemToCart, removeItemCart} from "../../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";

const SectionImage1 = () => {
    const [openMagazin , setOpenMagazin] = useState(false)
    const [posts , setPosts] = useState([
        {id : 1 , title:'голубое худи' , price:'1 200,00 руб.', image: image1},
        {id : 2 , title:'зеленое худи' , price:'1 200,00 руб.', image: image2},
        {id : 3 , title:'белый пуховик' , price:'2 550,00 руб.', image: image3},
        {id : 4 , title:'серый свитшот' , price:'900,00 руб.', image: image4},
        {id :5 , title:'темный свитшот' , price:'1 000,00 руб.', image: image5},
        {id :6 , title:'оверсайз футболка' , price:'1 200,00 руб.', image: image6},
        {id :7 , title:'зип толстовка' , price:'1 600,00 руб.', image: image7},
        {id :8 , title:'полосатая рубашка' , price:'1 300,00 руб.', image: image8},
        {id :9 , title:'костюм с желетом' , price:'4 300,00 руб.', image: image9},
        {id :10 , title:'классический образ' , price:'5 300,00 руб.', image: image10},
        {id :11 , title:'ярко голубой образ' , price:'3 000,00 руб.', image: image11},
        {id :12 , title:'современный образ' , price:'4 000,00 руб.', image: image12},
        {id :13 , title:'темная юбка' , price:'1 100,00 руб.', image: image13},
        {id :14 , title:'темная классика' , price:'4 500,00 руб.', image: image14},
        {id :15 , title:'классичекие брюки' , price:'2 300,00 руб.', image: image15},
        {id :16 , title:'темно зеленый образ' , price:'4 000,00 руб.', image: image16},
        // {id :17 , title:'голубое худи' , price:'1 200,00 руб'},
        // {id :18 , title:'голубое худи' , price:'1 200,00 руб'},
        // {id :19 , title:'голубое худи' , price:'1 200,00 руб'},
        // {id :20 , title:'голубое худи' , price:'1 200,00 руб'},
        // {id :21 , title:'голубое худи' , price:'1 200,00 руб'},
    ])
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
            <h2 className='page2_h2'>Каталог женской одежды</h2>
            <div className='page_2_div'>
                {posts.map((post) => (
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

export default SectionImage1;