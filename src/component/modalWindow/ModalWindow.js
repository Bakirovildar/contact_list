import React from 'react'
import './ModalWindow.css'
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";

const ModalWindow = ({offShowModalWindow, numberValue, nameValue, addNewContactHandle}) => {
    return (
        <div className='modalWindow'>
            <h1>Введите данные</h1>
            <div>
                <div><MyInput title='Номер телефона' onChange={numberValue}/></div>
                <div><MyInput title='Ваше имя' onChange={nameValue}/></div>
            </div>
            <div className='buttons'>
                <MyButton title='Добавить' cls='add' onClick={() => addNewContactHandle()}/>
                <MyButton title='Отмена' cls='cancel' onClick={() => offShowModalWindow()}/>
            </div>
        </div>
    )
}

export default ModalWindow