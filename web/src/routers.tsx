import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Lading from './pages/Ladding'
import Teacher from './pages/TeachersList'
import TeacherForm from './pages/TeacherForm'



const Routers = () => (
    <BrowserRouter>

        <Route path={ '/' } component={ Lading }/>
        <Route path={ '/study' } component={ Teacher }/>       
        <Route path={ '/give-classes' } component={ TeacherForm }/>

    </BrowserRouter>
)

export default Routers