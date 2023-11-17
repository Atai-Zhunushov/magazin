import React, {useState} from 'react';
import Union from '../../../img/Union.svg';
import {Box, FormControlLabel, Switch, Fade, InputBase, IconButton, Paper, Divider, useMediaQuery, Card, CardMedia, CardActions, CardContent, Button, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import ClearIcon from '@mui/icons-material/Clear';
import TextField from "@mui/material/TextField";
import {posts} from "../../templates/section_image1";
import {posts2} from "../../templates/section_suits";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../../store/cartSlice";
import Input from "./input";


const Header42 = () => {
     const allPosts = [...posts, ...posts2];
    const [inputValue, setInputValue] = useState('');
    const [filteredItems, setFilteredItems] = useState(allPosts);// Начально отображаем все элементы
    const [checked, setChecked] = useState(true);
    const dispatch = useDispatch()
    const cardItem = useSelector(state => state.cart.items)




    const addToCards = (item) => {
        dispatch(addItemToCart(item))
        console.log(item)
    }


    return (
        <div>
            <img src={Union} alt="" className="header_img_list" />
            {/*<Input/>*/}


        </div>
    );
};

export default Header42;