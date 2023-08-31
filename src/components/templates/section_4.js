import React, {useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Article from "../atoms/atomic4/article";
import image2 from '../../img/image2.jpeg';
import image3 from '../../img/image3.jpeg';
import image4 from '../../img/image4.jpeg';
import image5 from '../../img/image5.jpeg';
import image6 from '../../img/image6.jpeg';
import image11 from '../../img/image11.jpeg';
import image12 from '../../img/image12.jpeg';
import image13 from '../../img/image13.jpeg';
import image14 from '../../img/image14.jpeg';
import Article2 from "../atoms/atomic4/article_2";
import Article_3 from "../atoms/atomic4/article_3";
import Article4 from "../atoms/atomic4/article_4";
import Article5 from "../atoms/atomic4/article_5";
import Magazin from "../atoms/atomic/magaz";
import Header_4 from "../atoms/atomic/header_4";
import Header_4_4 from "../atoms/atomic/header_4_4";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, removeItemCart} from "../../store/cartSlice";
import Article6 from "../atoms/atomic4/article6";
import Article7 from "../atoms/atomic4/article7";
import Article8 from "../atoms/atomic4/article8";




const Section4 = () => {
    const dispatch = useDispatch()
    const cardItem = useSelector(state => state.cart.items)
    console.log(cardItem)
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };


    const addToCards = (item) => {
        dispatch(addItemToCart(item))
    }


    return (
        <div className='section_4'>
            <Article/>
            <Slider ref={sliderRef} {...settings}>
               <div className='box'>
                   <img src={image2} alt="" className='image_2'/>
                   <Article2 addToCart={() => addToCards({image: image2, name:'product 2', id:2})}/>
               </div>
                <div>
                    <img src={image3} alt="" className='image_3'/>
                    <Article_3 addToCart={() => addToCards({image: image3, name:'product 3', id:3})}/>
                </div>
                <div>
                    <img src={image4} alt="" className='image_4'/>
                    <Article4 addToCart={() => addToCards({image: image4, name:'product 4', id:4})}/>
                </div>
                <div>
                    <img src={image5} alt="" className='image_4'/>
                    <Article5 addToCart={() => addToCards({image: image5, name:'product 5', id:5})}/>
                </div>
                <div>
                    <img src={image6} alt="" className='image_4'/>
                    <Article6 addToCart={() => addToCards({image: image6, name:'product 6', id:6})}/>
                </div>
                <div>
                    <img src={image11} alt="" className='image_4'/>
                    <Article7 addToCart={() => addToCards({image: image11, name:'product 7', id:7})}/>
                </div>
                <div>
                    <img src={image12} alt="" className='image_4'/>
                    <Article8 addToCart={() => addToCards({image: image12, name:'product 8', id:8})}/>
                </div>
            </Slider>
                <div className='img_2' onClick={prevSlide}></div>
                <div className='img' onClick={nextSlide}></div>

        </div>
    );
};

export default Section4;