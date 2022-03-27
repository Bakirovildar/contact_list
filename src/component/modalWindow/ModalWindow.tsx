import React, {useState} from 'react'
import './ModalWindow.css'
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";

interface ChildProps {
    isNew: boolean,
    cancelClickHandler: () => void,
    okClickHandler: (isNew: boolean, contact: Contact) => void
    editItem: Contact
}

const ModalWindow: React.FC<ChildProps> = (props) => {

    const initialState = props.isNew
        ? {
            number: '',
            name: '',
            id: ''
        }
        : props.editItem

    const [state, setState] = useState<Contact>(initialState)
    const [numberDirty, setNumberDirty] = useState<boolean>(false)
    const [nameDirty, setNameDirty] = useState<boolean>(false)

    const validateName = (value: string) => {
        value.length <= 3
            ? setNameDirty(true)
            : setNameDirty(false)
    }

    const validateNumber = (value: string) => {
        const numValue = +value
        value.length < 11 || value.length > 11 || isNaN(numValue)
            ? setNumberDirty(true)
            : setNumberDirty(false)
    }

    const onNumberChange = number => {
        validateNumber(number)
        setState({...state, number: number})
    }

    const onNameChange = name => {
        validateName(name)
        setState({...state, name: name})
    }

    return (
        <div className='modalWindow'>
            <h1>{props.isNew === true ? 'Введите данные' : 'Редактировать данные'}</h1>
            <div>
                <div>
                    <MyInput
                        title='Номер телефона'
                        onChange={onNumberChange}
                        defaultValue={state.number}
                        isError={numberDirty}
                        errorText='Номер должен иметь 11 чисел'
                    />
                </div>
                <div>
                    <MyInput
                        title='Ваше имя'
                        onChange={onNameChange}
                        defaultValue={state.name}
                        isError={nameDirty}
                        errorText='Имя должен иметь больше 3 символов'

                />
                </div>
            </div>
            <div className='buttons'>
                {nameDirty || numberDirty === true
                    ? <MyButton title='Ok' cls='add' onClick={() => ''}/>
                    : <MyButton title='Ok' cls='add'
                                onClick={() => props.okClickHandler(props.isNew, state)}/>
                }
                <MyButton title='Отмена' cls='cancel' onClick={props.cancelClickHandler}/>
            </div>
        </div>
    )
}

export default ModalWindow