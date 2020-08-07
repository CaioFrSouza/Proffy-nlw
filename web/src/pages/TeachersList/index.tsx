import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/pageHeader'

import './styles.css'
import TeacherItem, {Itens} from '../../components/teacherItem'
import Input from '../../components/input'
import Select from '../../components/selected'

import search from '../../assets/images/icons/search.svg'
import api from '../../services/api'

const Teacher = () => {
    const [subject,setSubject] = useState('')
    const [week_day,setWeek_day] = useState('')
    const [time,setTime] = useState('')

    const [techers,setTechers] = useState([])

    function searchTeachers (e: FormEvent) {
        e.preventDefault()

        api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        }).then(res => setTechers(res.data))
        
    }

    return(
    <div id="page-teacher-list" className="container">
    <PageHeader title="Esses são os Proffys disponiveis.">
        
        <form id='search-teachers' onSubmit={searchTeachers} >
        <Select
            name={'subject'} 
            label={'Materia'} 
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder={'Matématica'}
            options={[
                { value:'Artes',label:'Artes' },
                { value:'Ciências',label:'Ciências' },
                { value:'Biologia',label:'Biologia' },
                { value:'Quimica',label:'Quimica' },
                { value:'Portugues',label:'Portugues' },
                { value:'Fisica',label:'Fisica' },
                // { value:'Quimica',label:'Quimica' },
            ]}
            />
        <Select
            name={'week_day'} 
            label={'Dia da semana'} 
            value={week_day}
            onChange={e => setWeek_day(e.target.value)}

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
            <Input 
                value={time}
                type='time' 
                name={'time'} 
                onChange={e => setTime(e.target.value)}
                
                label={'Hora'}/>

        <button type={'submit'} id={'search'}>
                <span>Pesquisar</span>  
                <img src={search} alt="Pesquisar"/>
        </button>
        </form>
    </PageHeader>
    <main>
        {
        
        techers.map((teacherItem:Itens) => {
            console.log(teacherItem)
            return(<TeacherItem
                        key={teacherItem.id}
                        id={teacherItem.id}
                        bio={teacherItem.bio} 
                        cost={teacherItem.cost}
                        wpp={teacherItem.wpp}
                        avatar={teacherItem.avatar}
                        name={teacherItem.name}
                        subject={teacherItem.subject}
                        />)
        })}
    </main>
</div>
)}

export default Teacher