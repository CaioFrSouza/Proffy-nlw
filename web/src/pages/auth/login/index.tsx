import React, { useState, useEffect, ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom';
import {FiEyeOff,FiEye} from 'react-icons/fi'

import Input from '../../../components/input';

import Logo from '../../../assets/images/logo.svg'

import './styles.css'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [disable,setDisable] = useState(false)
    const [visiblePassword,setVisiblePassword] = useState(false)

    function handleToogleVisiblePassword (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)  {
        e.preventDefault();
        return setVisiblePassword(!visiblePassword)
    }

    useEffect(() => {
        if( !email|| !password )
            return setDisable(false)
        return setDisable(true)
    },[email,password])

    return (
        <div className={ 'loginPage' }>
            <div className={ 'header' }>
                <img src={Logo} alt="Proffy"/>
                <p>Sua plataforma de estudos online </p>
                </div>
        <main>
            <fieldset className={ 'InputGroup' }>
                <legend>
                    <p>Fazer Login</p>
                    <Link to={'/register'} > Criar uma conta </Link>
                    </legend>
                <form action="">
                <Input 
                    label={'Email'} 
                    name={'email'}
                    placeholder={'Insira o seu melhor email'}
                    type='email'
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                <Input 
                    label={'Senha'} 
                    name={'email'}
                    placeholder={'Insira a sua senha'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={ visiblePassword ? 'text' :'password'}
                    required
                    icon={
                    <button id={'Eye'} 
                    className={visiblePassword? 'activity':'' }
                    onClick={handleToogleVisiblePassword}>
                        {visiblePassword? <FiEyeOff/> : <FiEye/>}
                    </button>}

                    />
                    <footer> 
                        <div className={'group'}>
                    <div className="input-flext-row">
                    <input
                    className={ 'checkBox' }
                    id={ 'lembrar' }
                    type={'checkbox'}
                    />
                    <label htmlFor="lembrar">Lembrar-me</label>

                    </div>
                        <Link to={'esqueci a minha senha'}>Esqueci a minha senha</Link>
                        </div>

                    </footer>
                    <button className={'submit'} id={ disable ? '':'disable' }  type={'submit'}>
                        Entrar
                    </button>
                </form>
            </fieldset>
        </main>
        </div>
        )
 
    }

export default Login