import React, {useState} from 'react';
import image1 from "../../image_sher/sher_1.webp";
import image2 from "../../image_sher/sher_2.webp";
import image3 from "../../image_sher/sher_3.webp";
import image4 from "../../image_sher/sher-4.webp";
import image5 from "../../image_sher/sher_5.webp";
import image6 from "../../image_sher/sher_6.webp";
import image7 from "../../image_sher/sher_7.webp";
import image8 from "../../image_sher/sher_8.webp";
import image9 from "../../image_sher/sher_9.webp";
import image10 from "../../image_sher/sher_10.webp";

import Magazin from "../atoms/atomic/magaz";
import {addItemToCart, removeItemCart} from "../../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {Card, CardMedia, CardContent, CardActions, Typography, Button, Grid} from "@mui/material";
import { useMediaQuery } from '@mui/material';
import Input from "../atoms/atomic/input";



export const posts = [
    {id : 1 , title:'парфюмерная вода' , price:'1 200,00 руб.', image: image1},
    {id : 2 , title:'космитический набор' , price:'1 200,00 руб.', image: image2},
    {id : 3 , title:'парфюмерный набор' , price:'2 550,00 руб.', image: image3},
    {id : 4 , title:'набор для тела' , price:'900,00 руб.', image: image4},
    {id :5 , title:'парфюмерный набор' , price:'1 000,00 руб.', image: image5},
    {id :6 , title:'базовый набор для ухода' , price:'1 200,00 руб.', image: image6},
    {id :7 , title:'гель для рук' , price:'1 600,00 руб.', image: image7},
    {id :8 , title:'парфюм от FullSpeed' , price:'1 300,00 руб.', image: image8},
    {id :9 , title:'женский набор косметики' , price:'4 300,00 руб.', image: image9},
    {id :10 , title:'парфюмерная вода' , price:'5 300,00 руб.', image: image10},

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