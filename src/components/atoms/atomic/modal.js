import React, {useState, useEffect} from 'react';

const Modal = ({openModal, close}) => {
    const [registered , setRegistered] = useState(true)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formData'))
        if (storedData) {
            setRegistered(!registered)
        }
    }, [])
    if (!openModal) return null;

    const loginChange = (e) => {
        setLogin(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    const emailChange = (e) => {
        setEmail(e.target.value)
    }

    const toggleMode = () => {
        setRegistered(!registered)
        setLogin('')
        setPassword('')
        setEmail('')
        close()
    }

    const handleForm = (e) => {
        e.preventDefault()
        if (registered) {
            const formData = {login , email , password}
            localStorage.setItem('formData', JSON.stringify(formData))

        } else {
            const storedData = JSON.parse(localStorage.getItem('formData'))
            if (storedData && storedData.login === login && storedData.password === password) {
                console.log('успешная регистрация')
                alert('успешная регистрация')
                close()
                setEmail('')
                setLogin('')
                setPassword('')
            } else {
                console.log('ошибка')
                alert('перепроверьте вашу запись')
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <div className="modal" id="modal">
                    <div className={registered ? 'modal-content' : 'modal-content2' }>
                        <span className="close-button" id="closeButton" onClick={close}>&times;</span>
                        <p className='modal_p'>{registered ? 'Форма регистрации' : 'Форма входа'}</p>
                        {registered ? <div className='modal_input_div'>
                                        <input type="text" className='modal_input' placeholder='логин' onChange={loginChange} value={login}/>
                                        <input type="text" className='modal_input' placeholder='пароль' onChange={passwordChange} value={password}/>
                                        <input type="text" className='modal_input' placeholder='email' onChange={emailChange} value={email}/>
                                     </div>
                            :
                            <div className='modal_input_div'>
                                <input type="text" className='modal_input' placeholder='логин' onChange={loginChange} value={login}/>
                                <input type="text" className='modal_input' placeholder='пароль' onChange={passwordChange} value={password}/>
                            </div>
                        }
                        <button className='modal_btn' type='submit'>{registered ? 'зарегестрироватся' : 'войти'}</button>
                        {!registered ? <div><button onClick={toggleMode} className="modal_btn">перейти к регистрации</button></div> : null}
                        {login.length > 0 && password && email && registered ? <button onClick={toggleMode} className="modal_btn">переключиться на вход</button> : null}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Modal;