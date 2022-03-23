import './App.css';
import Header from "./contacts/header/Header";
import Main from "./contacts/main/Main"
import React, {useEffect, useState} from "react";
import {addContact, deleteContact, updateContact} from "./service/ContactService";

function App() {
    const data = {
        contacts: []
    }

    const [state, setState] = useState<any>(data)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [deleteModalWindow, setDeleteModalWindow] = useState<boolean>(false)
    const [isNew, setIsNew] = useState<boolean>(false)
    const [valueName, setValueName] = useState<string>('')
    const [valueNumber, setValueNumber] = useState<string>('')
    const [numberDirty, setNumberDirty] = useState<boolean>(false)
    const [nameDirty, setNameDirty] = useState<boolean>(false)
    const [numberError] = useState<string>('Номер должен иметь 11 чисел')
    const [nameError] = useState<string>('Имя должен иметь больше 3 символов')
    const [editItem, setEditItem] = useState<string>('')

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

    const deleteContactHandle = (id:string) => {
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

    const showEditModalWindow = (contact: any) => {
        setShowModal(!showModal)
        setIsNew(false)
        setEditItem(contact)
        console.log(contact)
    }

    const editContactHandler = (editItem: any) => {
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

    const clickOkHandler = (isNew:boolean, number:string, name:string, editItem: () => void) => {
        if (isNew) {
            addNewContactHandle()
        } else {
            editContactHandler(editItem)
        }
    }

    const validateName = (value:string) => {
        setValueName(value)
        value.length <= 3
            ? setNameDirty(true)
            : setNameDirty(false)
    }

    const validateNumber = (value:string) => {
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
                addNewContactHandle={() => clickOkHandler}
                offShowModalWindow={offShowModalWindow}
                isNew={isNew}
                showModal={showModal}
                editItem={() => editItem}
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
