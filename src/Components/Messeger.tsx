import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import s from './ex.module.css'
import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {cleanErrorAC, limitErrorAC, wrongErrorAC} from "../redux/error-reducer";
import {AppRootStateType} from "../redux/store";
import {addMessageAC, cleanMessageAC, deleteLastMessageAC} from "../redux/message-reducer";
import {changeTitleAC, cleanTitleAC} from "../redux/title-reducer";

export const Counter = () => {
    const dispatch = useDispatch()
    const title = useSelector<AppRootStateType, string>(state => state.title)
    const message = useSelector<AppRootStateType, string[]>(state => state.message)
    const error = useSelector<AppRootStateType, string>(state => state.error)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTitleAC(e.currentTarget.value))
        if (message.length < 5) {
            dispatch(cleanErrorAC())
        }
    }

    const addMessage = () => {
        if (title.trim() === '') {
            dispatch(cleanTitleAC())
            dispatch(wrongErrorAC())
            return;
        }
        if (message.length < 5) {
            dispatch(addMessageAC(title))
            dispatch(cleanTitleAC())
        } else {
            dispatch(limitErrorAC())
            dispatch(cleanTitleAC())
        }
    }
    const deleteMessage = () => {
        dispatch(cleanMessageAC())
    }
    const deleteLastMessage = () => {
        // setMessage(message.slice(0, message.length))
        dispatch(deleteLastMessageAC())
    }
    const onEnterAdd = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addMessage()
        }
    }
    const mappedMessage = message.map(el => <li>{el}</li>)
    return (
        <div className={s.tablo}>
            {error && <p className={s.red}>{error}</p>}
            <div className={s.input_with_button}>
                <input onKeyDown={onEnterAdd} value={title} onChange={onChangeHandler} type="text"/>
                <Button name={'send'} callback={addMessage}/>
                <Button name={'clear'} callback={deleteMessage}/>
            </div>
            <Button callback={deleteLastMessage} name={'Delete last message'} disabled={false}/>
            <ul>{mappedMessage}</ul>
        </div>
    );
}