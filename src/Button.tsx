import React from 'react';
import s from 'Tablo.module.css'

type PropsType ={
    name:string
    callback:()=>void
    disabled?: boolean
}

const Button = (props:PropsType) => {
    const onclickHandler = ()=>{
        props.callback()
    }
    return (
        <div>
         <button onClick={onclickHandler} disabled={props.disabled}>{props.name}</button>
        </div>
    );
};

export default Button;