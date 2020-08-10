import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Lading from './pages/Ladding'
import Teacher from './pages/TeachersList'
import TeacherForm from './pages/TeacherForm'
import Login from './pages/auth/login'
import Register from './pages/auth/register'



const Routers = () => (
    <BrowserRouter>

        <Route path={ '/' } exact component={ Login }/>
        <Route path={ '/register' } exact component={ Register }/>
        <Route path={ '/study' } component={ Teacher }/>       
        <Route path={ '/give-classes' } component={ TeacherForm }/>

    </BrowserRouter>
)

export default Routers