import React from 'react'

import WppIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

const TeacherItem = () => (<article className="teacher-item">
<header>
<img src="https://scontent.fcgh5-1.fna.fbcdn.net/v/t1.0-1/p200x200/104298372_1937494536382058_477335610717930494_o.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_eui2=AeET8SegyUrX3zoSxJPUDYbpEhPriGGL8p8SE-uIYYvyn7R30jXypHvXqEP01iJEDcb7IPtdDyke9O4_UjNULJp5&_nc_ohc=zkfePhBnF9IAX91npUn&_nc_ht=scontent.fcgh5-1.fna&_nc_tp=6&oh=b52cf73e0d89a2beadcac947f24db93f&oe=5F51A8EB" alt="caio caik"/>
    <div>
    <strong>Caio Caik</strong>
    <span>Quimica</span>
    </div>
</header>

    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        <br></br>
        Error sapiente nesciunt delectus voluptates minima est. Voluptatem officiis rem voluptas nulla dicta temporibus assumenda minus reiciendis illum aperiam! Molestias, totam consectetur!
    </p>
    <footer>
        <p>
        Preço por aula
        <strong>R$ 80,00</strong>
        </p>
        <button type='button'>
            <img src={WppIcon} alt="Entrar em contato"/>
            Entrar em contato
        </button>
    </footer>
</article>)

export default TeacherItem