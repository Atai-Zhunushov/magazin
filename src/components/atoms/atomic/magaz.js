import React, {useState} from 'react';
import image19 from '../../../img/image19.svg'
import image20 from '../../../img/image20.svg'

const Magazin = ({openModal, close, selectedItems, removeItem}) => {
    const [byItem , setByItem] = useState(false);
    const [selectedItemName, setSelectedItemName] = useState('');

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
                        <div>
                            <img src={image19} alt=""/>
                            <p className='by_p2'>Номер заказа № {selectedItemName}</p>
                            <p className='by_p'>Спасибо за оформление заказа, на ваш телефон отправлено смс-сообщение для отслеживания заказа</p>
                            <p className='by_p3'>Все вопросы можно уточнить по ataizhunushov@gmail.com</p>
                        </div>
                    </div>
                </div>

            :
                <div className="magaz-modal">
                    <div className="magaz-content">
                        <span className="close-button" onClick={close}>&times;</span>
                        <h2 className='h2_magazin'>Ваша корзина</h2>
                        <ul className='ul_magaz'>
                            {selectedItems.map((item, index) => (
                                <li className='li' key={index}>
                                    <img className='img_magaz' src={item.image} alt={item.name} />
                                    {item.name}
                                    <button className='btn_magaz' onClick={() => buy( item) }>купить {index} продукт</button>
                                    <button onClick={() => removeItem(item.id)}>удалить {index} продукт</button>
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