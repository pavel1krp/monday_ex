import React from 'react';
import s from './ex.module.css'
import Button from "../Button";
import {addNumberAc, zeroNumber} from "../redux/counter-reducer";
import {AppRootStateType} from "../redux/store";
import {useDispatch, useSelector} from "react-redux";

export const Messenger = () => {
    const number = useSelector <AppRootStateType, number>(state=>state.number)
    const dispatch = useDispatch()

    const addNumber = () => {
        if (number < 5) {
            dispatch(addNumberAc())
        }
        return
    }
    const setZero = () => {
        localStorage.clear()
        dispatch(zeroNumber());
    }

    return (
        <div className={s.new}>
            <div className={s.smallTablo}>
                <div className={s.mainTablo}>
                    <p className={number < 5 ? s.number : `${s.number}  ${s.red}`}>{number}</p>
                </div>
                <div className={s.button_div}>
                    <Button name={'inc'} callback={addNumber} disabled={number>=5}/>
                    <Button name={'reset'} callback={setZero}/>
                </div>
            </div>
        </div>
    );
};

