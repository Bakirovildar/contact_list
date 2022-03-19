import React, {useState} from "react";
import './Header.css'
import MyButton from "../../component/myButton/MyButton";
import ModalWindow from "../../component/modalWindow/ModalWindow";

const Header = ({isNew, showModal, setShowModal, numberValue, nameValue, addNewContactHandle}) => {

    return (
        <div className='header'>
            {showModal === true
                ? <div className='modalWind'>
                    <ModalWindow
                        isNew={isNew}
                        offShowModalWindow={setShowModal}
                        nameValue={nameValue}
                        numberValue={numberValue}
                        addNewContactHandle={addNewContactHandle}
                    />
                </div>
                : ''
            }
            <MyButton
                onClick={setShowModal}
                cls='add'
                title='Добавить контакт'
            />
        </div>
    )
}

export default Header