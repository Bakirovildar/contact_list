import './App.css';
import Header from "./contacts/header/Header";
import Main from "./contacts/main/Main"
import React, {useState} from "react";

function App() {
    const data = {
        contacts: [
            {number: '8965584483', name: 'Ivan', id: 1},
            {number: '8965584124', name: 'Danil', id: 2},
            {number: '8912484434', name: 'Nikolay', id: 3},
        ]
    }
    const [state, setState] = useState(data)
    const [showModal, setShowModal] = useState(false)
    const [deleteModalWindow, setDeleteModalWindow] = useState(false)
    const [isNew, setIsNew] = useState(false)
    const [valueName, setValueName] = useState('')
    const [valueNumber, setValueNumber] = useState('')
    const [numberDirty, setNumberDirty] = useState(false)
    const [nameDirty, setNameDirty] = useState(false)
    const [numberError] = useState('Номер должен иметь 11 чисел')
    const [nameError] = useState('Имя должен иметь больше 3 символов')
    const [editItem, setEditItem] = useState('')

    const addNewContactHandle = () => {
        const newContact = {name: valueName, number: valueNumber, id: Date.now()}
        const newContacts = {contacts: [newContact, ...state.contacts]}
        setState(newContacts)
        setShowModal(!showModal)
        setNameDirty(false)
        setNumberDirty(false)
    }

    const deleteContactHandle = (id) => {
        const oldState = {...state}
        const filterContacts = oldState.contacts.filter(contact => contact.id !== id)
        const newContacts = {contacts: [...filterContacts]}
        setState(newContacts)
        setDeleteModalWindow(false)
    }

    const offShowModalWindow = () => {
        setShowModal(!showModal)
        setIsNew(true)
        setNameDirty(false)
        setNumberDirty(false)
    }

    const showEditModalWindow = (contact) => {
        setShowModal(!showModal)
        setIsNew(false)
        setEditItem(contact)

    }

    const editContactHandler = (editItem) => {
        const newState = {...state}
        const indexContact = state.contacts.indexOf(editItem)
        const newContact = state.contacts[indexContact] = {number: valueNumber, name: valueName, id: Date.now()}
        newState.contacts.splice(indexContact, 1, newContact)
        setState(newState)
        setShowModal(false)
    }

    const clickOkHandler = (isNew, number, name, editItem) => {
        if (isNew) {
            addNewContactHandle()
        } else {
            editContactHandler(editItem)
        }
    }

    const validateName = (value) => {
        setValueName(value)
        value.length <= 3
            ? setNameDirty(true)
            : setNameDirty(false)
    }

    const validateNumber = (value) => {
        setValueNumber(value)
        const numValue = +value
        value.length < 11 || value.length > 11 || isNaN(numValue)
            ? setNumberDirty(true)
            : setNumberDirty(false)
    }

    return (
        <div className="App">
            <Header
                numberValue={(value) => validateNumber(value)}
                nameValue={(value) => validateName(value)}
                addNewContactHandle={clickOkHandler}
                offShowModalWindow={offShowModalWindow}
                isNew={isNew}
                showModal={showModal}
                editItem={editItem}
                numberDirty={numberDirty}
                nameDirty={nameDirty}
                numberError={numberError}
                nameError={nameError}
            />
            <Main
                contacts={state.contacts}
                deleteContactHandle={deleteContactHandle}
                setDeleteModalWindow={() => setDeleteModalWindow(!deleteModalWindow)}
                deleteModalWindow={deleteModalWindow}
                showEditModalWindow={showEditModalWindow}
            />
        </div>
    );
}

export default App;
