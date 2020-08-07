import React, { Children } from 'react'

import { Link } from 'react-router-dom'

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'
import './styles.css'

interface PageHeaderProps {
    title:string;
    descripiton?:string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title,children,descripiton}) => (
    <header className="page-header">

        <div className="top-bar-container">

            <Link to='/'>

        <img src={backIcon} alt="Voltar"/>

            </Link>

            <img src={logoImg} alt="Proffy"/>

        </div>

           <div className="header-content">

            
            <strong>{title}</strong>
            {descripiton && <p>{descripiton}</p>}

            {children}

           </div>
       </header>

)

export default PageHeader