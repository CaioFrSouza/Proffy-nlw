import React from 'react'

import WppIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'
import api from '../../services/api'

export interface Itens {
    id?:number,
    avatar:string,
    name:string,
    subject:string,
    cost:number,
    bio:string,
    wpp:string,
}


const TeacherItem:React.FC<Itens> = ({avatar,name,subject,cost,bio,wpp,id}) => {
    
    function createNewConnection () {
        api.post('connections',
        {user_id:id})

    }

    return(
<article className="teacher-item">
    <header>
    <img src={avatar} alt={name}/>
        <div>
        <strong>{name}</strong>
        <span>{subject}</span>
        </div>
    </header>

    <p>
        {bio}
        <br></br>
    </p>
    <footer>
        <p>
        Preço por aula
        <strong>R$ {cost}</strong>
        </p>
        <a target='_blank' onClick={createNewConnection} href={`https://api.whatsapp.com/send?phone=55${wpp}&text=Olá!`}>
            <img src={WppIcon} alt="Entrar em contato"/>
            Entrar em contato
        </a >
    </footer>
</article>)}

export default TeacherItem