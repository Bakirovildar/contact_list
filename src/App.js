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
    const [editItem, setEditItem] = useState('')

    const addNewContactHandle = () => {
        const newContact = {name: valueName, number: valueNumber, id: Date.now()}
        const newContacts = {contacts: [newContact, ...state.contacts]}
        setState(newContacts)
        setShowModal(!showModal)
    }

    const deleteContactHandle = (id) => {
        const oldState = {...state}
        const filterContacts = oldState.contacts.filter(contact => contact.id !== id)
        const newContacts = {contacts: [...filterContacts]}
        setState(newContacts)
        setDeleteModalWindow(false)
    }

    const addContactShowModal = () => {
        setShowModal(!showModal)
        setIsNew(true)
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

    return (
        <div className="App">
            <Header
                numberValue={(value) => setValueNumber(value)}
                nameValue={(value) => setValueName(value)}
                addNewContactHandle={clickOkHandler}
                setShowModal={addContactShowModal}
                isNew={isNew}
                showModal={showModal}
                editItem={editItem}
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
