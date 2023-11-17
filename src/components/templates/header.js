import React, {useState} from 'react';
import image11 from '../../img/image11.jpg'
import Header_1 from "../atoms/atomic/header_1";
import Header_2 from "../atoms/atomic/header_2";
import Header_3 from "../atoms/atomic/header_3";
import Header_4 from "../atoms/atomic/header_4";
import Header_5 from "../atoms/atomic/header_5";
import Modal from "../atoms/atomic/modal";
import Magazin from "../atoms/atomic/magaz";
import Header_4_2 from "../atoms/atomic/header_4_2";
import Header_4_3 from "../atoms/atomic/header_4_3";
import Header_4_4 from "../atoms/atomic/header_4_4";
import {removeItemCart} from "../../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const [openMagazin , setOpenMagazin] = useState(false)
    const dispatch = useDispatch()
    const cardItem = useSelector(state => state.cart.items)
    console.log(cardItem)
    const [open , setOpen] = useState(false)
    const onOpenModal = () => {
        setOpen(true)
        document.body.style.overflow = 'hidden'
    }
    const closeModal = () => {
        setOpen(false)
        document.body.style.overflow = 'auto'
    }

    const openMagaz = (e) => {
        e.preventDefault()
        setOpenMagazin(true)
    }
    const closeMagaz = () => {
        setOpenMagazin(false)

    }
    const removeItem = (itemId) => {
        dispatch(removeItemCart(itemId));
    }
    return (
        <div className='container_img'>
            <div className='div_img'>
                <img src={image11} alt="" className="header_img"/>
                <Header_1/>
                <Header_2/>
                <Header_3/>
                <div className='header_4'>
                    <Header_4 onOpenModal={onOpenModal}/>
                    <Header_4_2/>
                    <Header_4_3/>
                    <Header_4_4 onOpenShop={openMagaz} count={cardItem.length > 0 && cardItem.length}/>
                    {cardItem.length > 0 && openMagazin && <Magazin selectedItems={cardItem} close={closeMagaz} openModal={openMagazin} removeItem={removeItem}/>}

                </div>
                <Header_5/>
                <Modal openModal={open} close={closeModal} />
            </div>
        </div>
    );
};

export default Header;