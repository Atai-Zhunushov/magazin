import React, {useState} from 'react';
import {
    Box, Button, Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    IconButton,
    InputBase,
    Paper,
    Typography, useMediaQuery
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import {posts} from "../../templates/section_image1";
import {posts2} from "../../templates/section_suits";
import {addItemToCart} from "../../../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../../store/filterSlice";


const Input = ({onChange}) => {
    const dispatch = useDispatch();
    const isMobile = useMediaQuery('(max-width:600px)'); // Установите желаемый порог для мобильного экрана
    const filterValue = useSelector(state => state.filter)



    const addToCards = (item) => {
        dispatch(addItemToCart(item))
        console.log(item)
    }

    const handleInputChange = (e) => {
        const value = e.target.value
        dispatch(setFilter(value))
    }

    const clearFilterInput = () => {
        dispatch(setFilter(''))
    }



    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center' ,marginTop: isMobile ? '' : 7}}>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: isMobile ? 250 : 500, marginTop:4, height: isMobile ? 31 : 55}}
                >
                    <IconButton sx={{ p: isMobile ? '5px' : '10px' ,}}  aria-label="menu">
                        <SearchIcon  fontSize={isMobile ? 'small' : 'medium'}/>
                    </IconButton>
                    <InputBase
                        value={filterValue}
                        sx={{ ml: 1, flex: 1, fontSize: isMobile ? 12 : 20 }}
                        placeholder="Поиск товаров"
                        inputProps={{ 'aria-label': 'поиск товаров' }}
                        onChange={handleInputChange}
                    />
                    <IconButton type="button" sx={{ p: isMobile ? '5px' : '10px' }} aria-label="search">
                        <SearchIcon fontSize={isMobile ? 'small' : 'medium'}/>
                    </IconButton>
                    <Divider sx={{ height: isMobile ? 20 : 32, m: isMobile ? 0.3 : 0.5 }} orientation="vertical" />
                    <IconButton type="button" sx={{ p: isMobile ? '5px' : '10px' }} aria-label="search">
                        <ClearIcon onClick={clearFilterInput} fontSize={isMobile ? 'small' : 'medium'}/>
                    </IconButton>
                </Paper>

            </Box>




        </div>
    );
};

export default Input;