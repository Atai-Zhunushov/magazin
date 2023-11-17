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
import {addItemToCart, removeItemCart} from "../../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {Card, CardMedia, CardContent, CardActions, Typography, Button, Grid} from "@mui/material";
import { useMediaQuery } from '@mui/material';
import Input from "../atoms/atomic/input";



export const posts = [
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
]







const SectionImage1 = () => {
    const [openMagazin , setOpenMagazin] = useState(false)
    const dispatch = useDispatch()
    const cardItem = useSelector(state => state.cart.items)
    const filterValue = useSelector(state => state.filter)

    const isMobile = useMediaQuery('(max-width:500px)'); // Установите желаемый порог для мобильного экрана







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

    const filteredData = posts.filter((item) => {
        const formattedPrice = item.price.replace(/\s+/g, '').replace(',', '.');
        const isPriceMatchLogic = parseFloat(formattedPrice);
        return isPriceMatchLogic.toString().includes(filterValue.toLowerCase()) ||
        item.title.toLowerCase().includes(filterValue.toLowerCase());
        }

    );

    return (
        <div>
            <Input/>
            <Typography variant={isMobile ? 'h6' : 'h3'} color="cadetblue" className={isMobile ? "page2_h2_mobile" : 'page2_h2'}>Каталог женской одежды</Typography>
            <div className={isMobile ? "page_2_mobile" : 'page_2_div'}>
                {filteredData.map((post) => (
                    <Card key={post.id} className={isMobile ? 'image2-mobile' : 'image_page2'}>
                        <CardMedia component="img" className={isMobile ? 'image-page-mobile' : 'image-page-desktop'} image={post.image} alt={post.title} />
                        <CardContent className={isMobile ? 'card-content-mobile' : 'card-content-desktop'}>
                            <Typography variant="h6" component="div" fontSize={isMobile ? 10 : 20}>
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" fontSize={isMobile ? 10 : 18}>
                                {post.price}
                            </Typography>
                        </CardContent>
                        <CardActions className={isMobile ? 'card_actons_btn' : 'card_actons_btn_desktop'}>
                            <Button size="small" className={isMobile ? 'card_actons_btn' : 'card_actons_btn_desktop'}   onClick={() => addToCards({id:post.id,  image:post.image, name:post.title, price:post.price})}>Добавить в корзину</Button>
                        </CardActions>
                    </Card>
                ))}

            </div>
            {cardItem.length > 0 && openMagazin && <Magazin selectedItems={cardItem}  openModal={openMagazin} close={closeMagaz} removeItem={removeItem}/>}
        </div>
    );
};

export default SectionImage1;