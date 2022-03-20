import React, {useState} from 'react'
import './ModalWindow.css'
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";

const ModalWindow = ({
                         isNew,
                         offShowModalWindow,
                         numberValue,
                         nameValue,
                         addNewContactHandle,
                         editItem,
                         nameDirty,
                         nameError,
                         numberDirty,
                         numberError

                     }) => {

    const initialState = isNew
        ? {
            number: '',
            name: '',
            id: ''
        }
        : editItem


    const [state] = useState(initialState)

    return (
        <div className='modalWindow'>
            <h1>{isNew === true ? 'Введите данные' : 'Редактировать данные'}</h1>
            <div>
                <div>
                    <MyInput
                        title='Номер телефона'
                        onChange={numberValue}
                        defaultValue={state.number}
                        numberDirty={numberDirty}
                        numberError={numberError}
                    />
                </div>
                <div>
                    <MyInput
                        title='Ваше имя'
                        onChange={nameValue}
                        defaultValue={state.name}
                        nameDirty={nameDirty}
                        nameError={nameError}
                    />
                </div>
            </div>
            <div className='buttons'>
                {nameDirty || numberDirty === true
                    ? <MyButton title='Ok' cls={'add'}/>
                    : <MyButton title='Ok' cls='add'
                                onClick={() => addNewContactHandle(isNew, state.number, state.name, editItem)}/>
                }
                <MyButton title='Отмена' cls='cancel' onClick={() => offShowModalWindow()}/>
            </div>
        </div>
    )
}

export default ModalWindow