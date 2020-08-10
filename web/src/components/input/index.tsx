import React, {InputHTMLAttributes, ReactNode} from 'react'

import './styles.css'

interface InputProps extends  InputHTMLAttributes<HTMLInputElement>{
    label:string,
    name:string,
    icon?:ReactNode,

}

const Input: React.FC<InputProps> = ({icon,label,name, ...rest}) => (
    <div className="input-block">
        <label aria-required htmlFor={name}>{label}</label>
        <input type="text" id={name}
        {...rest}
        />
        {icon}
</div>)

export default Input