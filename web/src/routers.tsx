import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Lading from './pages/Ladding'
import Teacher from './pages/TeachersList'
import TeacherForm from './pages/TeacherForm'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import { AsyncLocalStorage } from 'async_hooks'



const Routers = () => {        
    const [logged,setLogged] = useState (false);
    useEffect(() => {
        const session =  sessionStorage.getItem('@auth/token')
        const local = localStorage.getItem('@auth/token')
        if(session || local ) 
            return setLogged(true)
    } ,[])
    return(
    <BrowserRouter>

        <Route path={ '/' } exact component={ logged? Lading: Login }/>
        <Route path={ '/register' } exact component={ Register }/>
        <Route path={ '/study' } component={ Teacher }/>       
        <Route path={ '/give-classes' } component={ TeacherForm }/>

    </BrowserRouter>
)}

export default Routers