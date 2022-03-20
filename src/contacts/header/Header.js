import React from "react";
import './Header.css'
import MyButton from "../../component/myButton/MyButton";
import ModalWindow from "../../component/modalWindow/ModalWindow";

const Header = ({
                    isNew,
                    showModal,
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

    return (
        <div className='header'>
            {showModal === true
                ? <div className='modalWind'>
                    <ModalWindow
                        isNew={isNew}
                        offShowModalWindow={offShowModalWindow}
                        nameValue={nameValue}
                        numberValue={numberValue}
                        addNewContactHandle={addNewContactHandle}
                        editItem={editItem}
                        nameDirty={nameDirty}
                        nameError={nameError}
                        numberDirty={numberDirty}
                        numberError={numberError}
                    />
                </div>
                : ''
            }
            <MyButton
                onClick={offShowModalWindow}
                cls='add'
                title='Добавить контакт'
                nameDirty={nameDirty}
                numberDirty={numberDirty}
            />
        </div>
    )
}

export default Header