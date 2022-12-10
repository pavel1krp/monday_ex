import React, {useEffect, useState} from 'react';
import s from './Tablo.module.css'
import Button from "./Button";

const FirstTablo = () => {
    const [number, setNumber] = useState(0)

    useEffect(()=>{
     let x = localStorage.getItem('counterValue')
        if(x){
            let y = JSON.parse(x)
            setNumber(y)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(number))
    },[number])

    const addNumber = () => {
        if (number < 5) {
            setNumber(number + 1);
        }
        return
    }
    const setZero = () => {
        localStorage.clear()
        setNumber(0);
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
                    {/*<Button name={'set'} callback={setForLocalStorage}/>*/}
                    {/*<Button name={'get'} callback={getForLocalStorage}/>*/}
                </div>
            </div>
        </div>
    );
};

export default FirstTablo;