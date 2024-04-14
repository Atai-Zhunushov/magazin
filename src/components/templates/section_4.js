import React, {useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Article from "../atoms/atomic4/article";
import image2 from '../../image_sher/sher-4.webp';
import image3 from '../../image_sher/sher_5.webp';
import image4 from '../../image_sher/sher_6.webp';
import image5 from '../../image_sher/sher_13.webp';
import image6 from '../../image_sher/sher_12.webp';
import image11 from '../../image_sher/sher_21.webp';
import image12 from '../../image_sher/sher_24.webp';
import image13 from '../../image_sher/sher_8.webp';
import image14 from '../../image_sher/sher_9.webp';
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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Добавляем слушатель события resize при монтировании компонента
        window.addEventListener('resize', handleResize);

        // Убираем слушатель события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);




    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: windowWidth <= 500 ? 1 : 3,
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


    if (windowWidth <= 500) {
        settings.slidesToShow = 1
    } else if (windowWidth > 1400) {
        settings.slidesToShow = 3
    }

    return (
        <div className='section_4'>
            <Article/>
            <Slider ref={sliderRef} {...settings}>
               <div className='box'>
                   <img src={image2} alt="" className='image_2'/>
                   <Article2 addToCart={() => addToCards({image: image2, name:'product 2', id:2})}/>
               </div>
                <div className='box'>
                    <img src={image3} alt="" className='image_3'/>
                    <Article_3 addToCart={() => addToCards({image: image3, name:'product 3', id:3})}/>
                </div>
                <div  className='box'>
                     <div className='image_4_container'>
                         <img src={image4} alt="" className='image_4'/>
                     </div>
                    <Article4 addToCart={() => addToCards({image: image4, name:'product 4', id:4})}/>
                </div >
                <div className='box'>
                    <img src={image5} alt="" className='image_4'/>
                    <Article5 addToCart={() => addToCards({image: image5, name:'product 5', id:5})}/>
                </div>
                <div className='box'>
                    <img src={image6} alt="" className='image_4'/>
                    <Article6 addToCart={() => addToCards({image: image6, name:'product 6', id:6})}/>
                </div>
                <div className='box'>
                    <img src={image11} alt="" className='image_4'/>
                    <Article7 addToCart={() => addToCards({image: image11, name:'product 7', id:7})}/>
                </div>
                <div className='box'>
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