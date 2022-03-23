import React, {useState} from 'react'
import './ModalWindow.css'
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";

interface ChildProps {
    isNew: boolean,
    offShowModalWindow: () => void,
    numberValue: (value: string) => void,
    nameValue: (value: string) => void,
    addNewContactHandle: () => void,
    editItem: () => void,
    nameDirty: boolean,
    nameError: string,
    numberDirty: boolean,
    numberError: string,

}

const ModalWindow: React.FC<ChildProps> = (props) => {

    const initialState = props.isNew
        ? {
            number: '',
            name: '',
            id: ''
        }
        : props.editItem

 // @ts-ignore
    const [state] = useState(initialState)

    return (
        <div className='modalWindow'>
            <h1>{props.isNew === true ? 'Введите данные' : 'Редактировать данные'}</h1>
            <div>
                <div>
                    {/*
                    // @ts-ignore */}
                    <MyInput
                        title='Номер телефона'
                        onChange={props.numberValue}

                    // @ts-ignore
                        defaultValue={state.number}
                        numberDirty={props.numberDirty}
                        numberError={props.numberError}
                    />
                </div>
                <div>
                    {/*
                     // @ts-ignore */}
                    <MyInput
                        title='Ваше имя'
                        onChange={props.nameValue}
                    // @ts-ignore
                        defaultValue={state.name}
                        nameDirty={props.nameDirty}
                        nameError={props.nameError}
                    />
                </div>
            </div>
            <div className='buttons'>
                {props.nameDirty || props.numberDirty === true
                    ? <MyButton title='Ok' cls='add' onClick={() => ''}/>
                    : <MyButton title='Ok' cls='add'
                    // @ts-ignore
                                onClick={() => props.addNewContactHandle(props.isNew, state.number, state.name, props.editItem)}/>
                }
                <MyButton title='Отмена' cls='cancel' onClick={() => props.offShowModalWindow()}/>
            </div>
        </div>
    )
}

export default ModalWindow