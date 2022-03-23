import React from "react";
import './Header.css'
import MyButton from "../../component/myButton/MyButton";
import ModalWindow from "../../component/modalWindow/ModalWindow";

interface ChildProps {
    isNew: boolean
    showModal: boolean
    offShowModalWindow: () => void
    numberValue: (value: string) => void
    nameValue: (value: string) => void
    addNewContactHandle: () => void
    editItem: () => void
    nameDirty: boolean
    nameError: string
    numberDirty: boolean
    numberError: string
}

const Header: React.FC<ChildProps> = (props) => {

    return (
        <div className='header'>
            {props.showModal === true
                ? <div className='modalWind'>
                    <ModalWindow
                        isNew={props.isNew}
                        offShowModalWindow={props.offShowModalWindow}
                        nameValue={props.nameValue}
                        numberValue={props.numberValue}
                        addNewContactHandle={props.addNewContactHandle}
                        editItem={props.editItem}
                        nameDirty={props.nameDirty}
                        nameError={props.nameError}
                        numberDirty={props.numberDirty}
                        numberError={props.numberError}
                    />
                </div>
                : ''
            }
            <MyButton
                onClick={props.offShowModalWindow}
                cls='add'
                title='Добавить контакт'
            />
        </div>
    )
}

export default Header