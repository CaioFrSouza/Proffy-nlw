import React from 'react'
import PageHeader from '../../components/pageHeader'

import './styles.css'
import TeacherItem from '../../components/teacherItem'

const Teacher = () => (
    <div id="page-teacher-list" className="container">
    <PageHeader title="Esses são os Proffys disponiveis.">
        
        <form id='search-teachers'>
            <div className="input-block">
                <label htmlFor="subject">Materias</label>
                <input type="text" id='subject'/>
            </div>

            <div className="input-block">
                <label htmlFor="week-day">Dia da semana</label>
                <input type="text" id='week-day'/>
            </div>

            <div className="input-block">
                <label htmlFor="time">Hora</label>
                <input type="text" id='time'/>
            </div>


        </form>
    </PageHeader>
    <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
    </main>
</div>
)

export default Teacher