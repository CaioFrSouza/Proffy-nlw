import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/pageHeader'

import './styles.css'
import Input from '../../components/input'

import warningIcon from '../../assets/images/icons/warning.svg'
import TextArea from '../../components/textArea'
import Select from '../../components/selected'

const TeacherForm = () => {
    
    const [name,setName] = useState('')
    const [avatar,setAvatar] = useState('')
    const [wpp,setWpp] = useState('')
    const [bio,setBio] = useState('')
    const [cost,setCost] = useState('')
    const [subject,setSubject] = useState('')

    const [schedule,setSchduleItems] = useState([
        {week_day:0, from:'', to:""}
    ])


    function setSchduleItemsValue (index: number, FIled: string,value: string) {
        const newArr = schedule.map((val,i) => {
            if(index === i )
                return {...val, [FIled] : value };
            return val;
        });
        setSchduleItems(newArr)
        console.log(newArr)
    }

    function addNewScheduleItem () {
        setSchduleItems([...schedule,
            {week_day:0, from:'', to:""}
        
        ])
    }

    function handleCreateClass (e:FormEvent) {
        e.preventDefault()
        console.log(e)
        console.log({
            name,
            avatar,
            bio,
            wpp,
            cost,
            subject
        })
    }

    return(
    <div id="page-teacher-form" className="container">
        <PageHeader 
            title="Que incrivel que você quer dar aulas"
            descripiton="O primeiro passo é preencher esse formulário de inscrião"
        />

        <main>
            <form onSubmit={handleCreateClass}>
            <fieldset>
                <legend>
                    Seus dados
                    </legend>
                    <Input 
                        value={name} 
                        onChange={e => setName(e.target.value) } 
                        name={'name'} 
                        label={'Nome completo'} 
                        placeholder={'Caio Caik Fresneda de Souza'}/>
                    
                    <Input 
                        name={'avatar'} 
                        type={'link'} 
                        label={'Avatar'} 
                        placeholder={'https://'}
                        value={avatar} 
                        onChange={e => setAvatar(e.target.value) }/>
                    
                    <Input 
                        name={'wpp'} 
                        label={'WhatsApp'} 
                        placeholder={'(11) 912345678'}
                        value={wpp} 
                        onChange={e => setWpp(e.target.value) }/>

                    
                    <TextArea 
                        name={'bio'} 
                        label={'Biografia'}
                        value={bio} 
                        onChange={e => setBio(e.target.value) }/>
                    
            </fieldset>

            <fieldset>
                <legend>
                    Sobre a aula 
                    </legend>

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
                            // { value:'Quimica',label:'Quimica' },
                        ]}
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        />
                    <Input 
                        name={'cost'} 
                        label={'Custo da sua hora por aula'} 
                        placeholder={'R$: 90,00'}
                        value={cost} 
                        onChange={e => setCost(e.target.value) }/>
            </fieldset>
            
            <fieldset>
                <legend>Horarios disponíveis
                <button 
                    type="button"
                    onClick={addNewScheduleItem}
                    >
                    + Novo horario
                </button>

                </legend>
                
                {
                    schedule.map((schduleItem, index) =>
                     (<div key={schduleItem.week_day} className="schedule-item">
                <Select

                name={'week_day'} 
                label={'Dia da semana'}
                value={schduleItem.week_day} 
                onChange={(e) => setSchduleItemsValue(index,'week_day',e.target.value)}
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
                        name="from" 
                        label="Das" 
                        type="time" 
                        value={schduleItem.from} 
                        onChange={(e) => setSchduleItemsValue(index,'from',e.target.value)}

                        />
                    <Input 
                        name="to" 
                        label="Até" 
                        type="time" 
                        value={schduleItem.to} 
                        onChange={(e) => setSchduleItemsValue(index,'to',e.target.value)}

                        />
                </div>))
}
            </fieldset>
            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante"/>
                    Importante <br/>
                    Preencha todos os dados
                </p>
                <button type={"submit"}>
                    Salvar cadastro
                </button>
            </footer>
            </form>
        </main>
</div>
)}

export default TeacherForm