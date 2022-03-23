import './App.css';
import Header from "./contacts/header/Header";
import Main from "./contacts/main/Main"
import React, {useEffect, useState} from "react";
import {addContact, deleteContact, updateContact} from "./service/ContactService";

function App() {
    const data = {
        contacts: []
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

    useEffect(() => {
        fetch('http://localhost:8081/contacts')
            .then(data => data.json())
            .then(json => json.map(contact => ({...contact, id: contact.id})))
            .then(db => setState({contacts: [...db]}))
    }, [])

    const addNewContactHandle = () => {
        const newContact = {name: valueName, number: valueNumber, id: Date.now()}
        const newContacts = {contacts: [newContact, ...state.contacts]}
        setState(newContacts)
        setShowModal(!showModal)
        addContact(newContact)
        setNameDirty(false)
        setNumberDirty(false)
    }

    const deleteContactHandle = (id) => {
        const oldState = {...state}
        const filterContacts = oldState.contacts.filter(contact => contact.id !== id)
        const newContacts = {contacts: [...filterContacts]}
        deleteContact(id)
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
        const newContact = state.contacts[indexContact] = {
            number: valueNumber || editItem.number,
            name: valueName || editItem.name,
            id: editItem.id
        }
        newState.contacts.splice(indexContact, 1, newContact)
        updateContact(newContact)
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
