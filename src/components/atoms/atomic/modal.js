import React, {useState, useEffect} from 'react';
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {Typography} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {Input} from "./input";




const Modal = ({openModal, close}) => {
    const [registered , setRegistered] = useState(true)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loginError, setLoginError] = useState(''); // Состояние для ошибки логина
    const [passwordError, setPasswordError] = useState(''); // Состояние для ошибки пароля
    const [emailError, setEmailError] = useState(''); // Состояние для ошибки пароля
    const [showPassword, setShowPassword] = useState(false);


    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formData'))
        if (storedData) {
            setRegistered(!registered)
        }
    }, [])
    if (!openModal) return null;

    const loginChange = (e) => {
        setLogin(e.target.value)
        if (e.target.value.length < 4) {
            setLoginError('логин должен быть больше 4')
        } else if (/\d/.test(e.target.value)) {
            setLoginError('логин не должен содержать цифры')
        } else {
            setLoginError('')
        }
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 4) {
            setPasswordError('пароль должен быть больше 4')
        }  else if (e.target.value.length > 9) {
            setPasswordError('пароль должен быть меньше 10')
        }
        else {
            setPasswordError('')
        }
    }
    const emailChange = (e) => {
        setEmail(e.target.value)
        const inputEmailValue = e.target.value;
        if (inputEmailValue.length === 0) {
            setEmailError('Email не должен быть пустым');
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputEmailValue)) {
            setEmailError('Неправильный формат email');
        } else {
            setEmailError('');
        }
    }

    const toggleMode = () => {
        setRegistered(!registered)
        setLogin('')
        setPassword('')
        setEmail('')
        close()
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };






    const handleForm = (e) => {
        e.preventDefault()

        if (registered) {
            if (!loginError && !passwordError && !emailError) {
                const formData = {login , email , password}
                localStorage.setItem('formData', JSON.stringify(formData))
                alert('успешная регистрация')
            } else {
                alert('не успешная отправка формы')
            }


        } else {
            const storedData = JSON.parse(localStorage.getItem('formData'))
            if (storedData && storedData.login === login && storedData.password === password) {
                alert('успешный вход')
                close()
                setEmail('')
                setLogin('')
                setPassword('')
            } else if (storedData && storedData.login !== login) {
                alert('логины не совпадают')
            } else if (storedData && storedData.password !== password) {
                alert('пароли не совпадают')
            } else {
                alert('ошибка 404')
            }
        }
    }




    return (
        <div>
            <form onSubmit={handleForm}>
                <div className="modal" id="modal">
                    <div className={registered ? 'modal-content' : 'modal-content2' }>
                        <span className="close-button" id="closeButton" onClick={close}>&times;</span>
                        <Typography className='modal_p'>{registered ? 'Форма регистрации' : 'Форма входа'}</Typography>
                        {registered ? <div className='modal_input_div'>
                                        <TextField label="login" size="small" type="text" className='modal_input'  onChange={loginChange} value={login} error={!!loginError} helperText={loginError} />
                                        <TextField label="password" size="small" type={showPassword ? 'text' : 'password'} className='modal_input' onChange={passwordChange} value={password} error={!!passwordError} helperText={passwordError} InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={togglePasswordVisibility}>
                                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),}}/>
                                        <TextField label="email" size="small" type="text" className='modal_input email_inp'  onChange={emailChange} value={email} error={!!emailError} helperText={emailError} inputProps={{className:'email'}}/>
                                     </div>
                            :
                            <div className='modal_input_div'>
                                <TextField label="login" size="small" type="text" className='modal_input' onChange={loginChange} value={login} error={!!loginError} helperText={loginError}/>
                                <TextField label="password" size="small" type={showPassword ? 'text' : 'password'} className='modal_input2' onChange={passwordChange} value={password} error={!!passwordError} helperText={passwordError} InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={togglePasswordVisibility}>
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),}}/>
                            </div>
                        }
                        <Button  variant="contained" className='modal_btn' type='submit'>{registered ? 'зарегестрироватся' : 'войти'}</Button>
                        {!registered ? <div>
                            <Button variant="contained" onClick={toggleMode} className="modal_btn">перейти к регистрации</Button>
                        </div> : null}
                        {  registered ? <Button  disabled={!(login && password && email)} variant="contained" onClick={toggleMode} className="modal_btn login">переключиться на вход</Button>  : null}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Modal;