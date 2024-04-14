import React, {useState} from 'react';

import Magazin from "../atoms/atomic/magaz";
import {addItemToCart, removeItemCart} from "../../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Select,MenuItem,
    Slide,
    Slider,
    Typography,
    useMediaQuery,
} from "@mui/material";
import {posts} from "./section_image1";
import Input from "../atoms/atomic/input";
import image11 from "../../image_sher/sher_21.webp";
import image12 from "../../image_sher/sher_22.webp";
import image13 from "../../image_sher/sher_13.webp";
import image14 from "../../image_sher/sher_24.webp";
import image15 from "../../image_sher/sher_25.webp";
import image16 from "../../image_sher/sher_26.webp";
import image17 from "../../image_sher/sher_27.webp";
import image18 from "../../image_sher/sher_28.webp";
import image19 from "../../image_sher/sher_29.webp";
import image20 from "../../image_sher/sher_30.webp";
import {posts2} from "./section_suits";




const SectionImage2 = () => {
    const [openMagazin , setOpenMagazin] = useState(false)
    const allPosts = [...posts2];

    const dispatch = useDispatch()
    const cardItem = useSelector(state => state.cart.items)
    const filterValue = useSelector(state => state.filter)
    const isMobile = useMediaQuery('(max-width:500px)'); // Установите желаемый порог для мобильного экрана





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



    const filteredData = allPosts.filter((item) => {
        const formattedPrice = item.price.replace(/\s+/g, '').replace(',', '.');
        const isPriceMatchLogic = parseFloat(formattedPrice);
        return isPriceMatchLogic.toString().includes(filterValue.toLowerCase()) ||
        item.title.toLowerCase().includes(filterValue.toLowerCase());

    })







    return (
        <div>
            <Input/>


            <Typography variant={isMobile ? 'h6' : 'h3'} color="saddlebrown" className={isMobile ? "page2_h2_mobile" : "page2_h2"}>Каталог мужской одежды</Typography>
            <div className={isMobile ? "page_2_mobile" : 'page_2_div'}>
                {filteredData.map((post) => (
                    <Card key={post.id} className={isMobile ? 'image2-mobile' : 'image_page2'}>
                        <CardMedia component="img" className={isMobile ? 'image-page-mobile' : 'image-page-desktop'} image={post.image} alt={post.title} />
                        <CardContent className={isMobile ? 'card-content-mobile' : 'card-content-desktop'}>
                            <Typography variant="h6" component="div" fontSize={isMobile ? 9 : 20}>
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

export default SectionImage2;