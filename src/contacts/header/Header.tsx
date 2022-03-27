import React from "react";
import './Header.css'
import MyButton from "../../component/myButton/MyButton";
import ModalWindow from "../../component/modalWindow/ModalWindow";

interface ChildProps {
    isNew: boolean
    showModal: boolean
    toggleModalWindow: () => void
    clickOkHandler: (isNew: boolean, contact: Contact) => void
    editItem: Contact
}

const Header: React.FC<ChildProps> = (props) => {

    return (
        <div className='header'>
            {props.showModal === true
                ? <div className='modalWind'>
                    <ModalWindow
                        isNew={props.isNew}
                        cancelClickHandler={props.toggleModalWindow}
                        okClickHandler={props.clickOkHandler}
                        editItem={props.editItem}
                    />
                </div>
                : ''
            }
            <MyButton
                onClick={props.toggleModalWindow}
                cls='add'
                title='Добавить контакт'
            />
        </div>
    )
}

export default Header