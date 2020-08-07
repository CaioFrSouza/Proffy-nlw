import React from 'react'
import PageHeader from '../../components/pageHeader'

import './styles.css'
import TeacherItem from '../../components/teacherItem'
import Input from '../../components/input'
import Select from '../../components/selected'

const Teacher = () => (
    <div id="page-teacher-list" className="container">
    <PageHeader title="Esses são os Proffys disponiveis.">
        
        <form id='search-teachers'>
        <Select
            name={'subject'} 
            label={'Materia'} 
            placeholder={'Matématica'}
            options={[
                { value:'Artes',label:'Artes' },
                { value:'Ciências',label:'Ciências' },
                { value:'Biologia',label:'Biologia' },
                { value:'Quimica',label:'Quimica' },
                { value:'Portugues',label:'Portugues' },
                { value:'Fisica',label:'Fisica' },
                { value:'Quimica',label:'Quimica' },
            ]}
            />
        <Select
            name={'week_day'} 
            label={'Dia da semana'} 
            options={[
                { value:'0',label:'Domingo' },
                { value:'1',label:'Segunda-feira' },
                { value:'2',label:'Terça-feira' },
                { value:'3',label:'Quarta-feira' },
                { value:'4',label:'Quinta-feira' },
                { value:'5',label:'Sexta-feira' },
                { value:'6',label:'Sabádo' },
            ]}
            />
            <Input type='time' name={'time'} label={'Hora'}/>


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