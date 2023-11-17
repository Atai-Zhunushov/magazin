import React, {useState} from 'react';
import image19 from '../../../img/image19.svg'
import image20 from '../../../img/image20.svg'
import {Card, CardMedia, CardContent, CardActions, Button, Typography, useMediaQuery} from "@mui/material";
import {width} from "@mui/system";

const Magazin = ({openModal, close, selectedItems, removeItem}) => {
    const [byItem , setByItem] = useState(false);
    const [selectedItemName, setSelectedItemName] = useState('');
    const isMobile = useMediaQuery('(max-width:500px)'); // Установите желаемый порог для мобильного экрана

    if (!openModal || !selectedItems) return null;

    const buy = (item) => {
        console.log(item)
        setByItem(true)
        setSelectedItemName(item.id)
    }



    return (
        <div>

            {byItem ?
                <div className={`magaz-modal`}>
                    <div className="magaz-content">
                        <span className="close-button" onClick={close}>&times;</span>
                        <div style={{display: 'flex', alignItems:'center', justifyContent: 'center', flexDirection: 'column'}}>
                            <img src={image19} alt="" style={{width: isMobile ? 60 : 110, }}/>
                            <p className='by_p2'>Номер заказа № {selectedItemName}</p>
                            <p className='by_p' style={{width: isMobile ? 300 : 449}}>Спасибо за оформление заказа, на ваш телефон отправлено смс-сообщение для отслеживания заказа</p>
                            <p className='by_p3' style={{marginBottom: isMobile ? 10 : 30}}>Все вопросы можно уточнить по ataizhunushov@gmail.com</p>
                        </div>
                    </div>
                </div>

            :
                <div className="magaz-modal">
                    <div className={isMobile ? 'magaz-content-mobile' : 'magaz-content'}>
                        <span className="close-button" onClick={close}>&times;</span>
                        <Typography className='h2_magazin' color='coral' variant={isMobile ? 'h5' : 'h4'}>Ваша корзина</Typography>
                        <ul className='ul_magaz' style={{width: isMobile ? 370 : 870, gap: isMobile ? 20 : 40}}>
                            {selectedItems.map((item, index) => (
                                <li className='li' key={index} style={{marginBottom: isMobile ? 20 : 40}}>
                                    <Card className='product-card' sx={{maxHeight:isMobile ? 220 : 400, maxWidth:isMobile ? 110 : 250}}>
                                        <CardMedia component="img" sx={{height:isMobile ? 130 : 250}} image={item.image} alt={item.name} />
                                        <CardContent className={isMobile ? 'card-content-mobile' : 'card-content-desktop'}>
                                            <Typography variant="h6" component="div" sx={{fontSize:isMobile ? 10.5 : 16}}>
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" sx={{fontSize:isMobile ? 10.5 : 16}}>
                                                Цена: {item.price}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className="card_actons_btn">
                                            <Button size="small" sx={{fontSize : isMobile ? 9 : 13 , minWidth: isMobile ? 40 : 64}}   onClick={() => buy(item)} >Купить</Button>
                                            <Button size="small" sx={{fontSize : isMobile ? 9 : 13, marginLeft: isMobile ? 0 : 8, minWidth: isMobile ? 40 : 64}}   onClick={() => removeItem(item.id)}>Удалить</Button>
                                        </CardActions>
                                    </Card>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            }
        </div>
    );
};

export default Magazin;