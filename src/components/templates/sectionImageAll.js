import React, {useEffect, useState} from 'react';
import {posts2} from "./section_suits";
import {posts} from "./section_image1";
import {Button, Card, CardActions, CardContent, CardMedia, Typography, useMediaQuery} from "@mui/material";
import {addItemToCart, removeItemCart} from "../../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import Input from "../atoms/atomic/input";


const SectionImageAll = () => {
    const allPosts = [...posts, ...posts2];
    const isMobile = useMediaQuery('(max-width:500px)');
    const dispatch = useDispatch()
    const cardItem = useSelector(state => state.cart.items)
    const filterValue = useSelector(state => state.filter)


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

    }

    );





    return (
        <div>
            <Input />
            <Typography variant={isMobile ? 'h6' : 'h3'} color="s" className={isMobile ? "page2_h2_mobile" : 'page2_h2'}>Каталог  одежды</Typography>
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


        </div>
    );
};

export default SectionImageAll;