import React, {useState} from 'react';
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
import image29 from "../../img/image32.webp";
import image30 from "../../img/image34.webp";
import image31 from "../../img/image35.webp";
import image32 from "../../img/image36.webp";
import image17 from "../../img/image37.webp";
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
    {id :29 , title:'класические рубашка' , price:'2 200,00 руб', image: image29},
    {id :30 , title:'темная ветровка' , price:'1 400,00 руб', image: image30},
    {id :31 , title:'синяя худи' , price:'1 200,00 руб', image: image31},
    {id :32 , title:'темный плащ' , price:'3 200,00 руб', image: image32},
]


const SectionImage2 = () => {
    const [openMagazin , setOpenMagazin] = useState(false)

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



    const filteredData = posts2.filter((item) => {
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