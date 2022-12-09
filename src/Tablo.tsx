import React, {ChangeEvent, useState,KeyboardEvent} from 'react';
import s from  './Tablo.module.css'
import Button from "./Button";
const Tablo = () => {
    const [message, setMessage] = useState<Array<string>>([])

    const [title, setTitle] = useState('')
    const [error, setError] = useState('')

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
        if(message.length<5){
            setError('')
        }
    }
    const addMessage = ()=>{
        if(title.trim() === ''){
            setTitle('')
            setError('Wrong Value!')
            return;
        }
        if(message.length<5){
        message.push(title)
        setMessage([...message])
        setTitle('')}
    else{
        setError('Limit of messages is exceeded.')
        return setTitle('')
    }}
    const deleteMessage = ()=>{
        setMessage( [])
    }
    const deleteLastMessage = ()=>{
        let x = message.pop()
        setMessage(message.slice(0,message.length))
        setError('')
    }
    const onEnterAdd = (e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === "Enter"){
            addMessage()
        }
    }
    const mappedMessage = message.map(el=> <li>{el}</li>)
    return (
        <div className={s.tablo}>
            {error && <p className={s.red}>{error}</p>}
            <div className={s.input_with_button}>
            <input onKeyDown={onEnterAdd} value={title} onChange={onChangeHandler} type="text"/>
                <Button name={'send'} callback={addMessage}/>
                <Button name={'clear'} callback={deleteMessage} />
            </div>
            <Button callback={deleteLastMessage} name={'Delete last message'} disabled={false} />
            <ul>{mappedMessage}</ul>
        </div>
    );
};

export default Tablo;