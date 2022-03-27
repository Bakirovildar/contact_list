import './App.css';
import Header from "./contacts/header/Header";
import Main from "./contacts/main/Main"
import React, {useEffect, useState} from "react";
import {addContact, deleteContact, getAllContacts, updateContact} from "./service/ContactService";

function App() {
    const [contactListState, setContactListState] = useState<Array<Contact>>([])
    const [showModal, setShowModal] = useState<boolean>(false)
    const [isNew, setIsNew] = useState<boolean>(false)
    const [editItem, setEditItem] = useState<Contact>(null)

    useEffect(() => {
        getAllContacts().then(contacts => setContactListState(contacts))
    }, [])

    const addNewContactHandle = (newContact: Contact) => {
        addContact(newContact).then(savedContact => {
            setContactListState([savedContact, ...contactListState])
        })
        setShowModal(!showModal)
    }

    const editContactHandler = (editContact: Contact) => {
        updateContact(editContact).then(() => {
                setContactListState(contactListState.map(contact => {
                    if (contact.id == editContact.id) {
                        contact.name = editContact.name
                        contact.number = editContact.number
                    }
                    return contact
                }))
            }
        )
        setShowModal(false)
    }

    const deleteContactHandle = (id: string) => {
        deleteContact(id).then(() => {
            const filterContacts = contactListState.filter(contact => contact.id !== id)
            const newContacts = [...filterContacts]
            setContactListState(newContacts)
        })
    }

    const toggleModalWindow = () => {
        setShowModal(!showModal)
        setIsNew(true)
    }

    const showEditModalWindow = (contact: any) => {
        setShowModal(!showModal)
        setIsNew(false)
        setEditItem(contact)
    }

    const clickOkHandler = (isNew: boolean, contact: Contact) => {
        if (isNew) {
            addNewContactHandle(contact)
        } else {
            editContactHandler(contact)
        }
    }

    return (
        <div className="App">
            <Header
                clickOkHandler={clickOkHandler}
                toggleModalWindow={toggleModalWindow}
                isNew={isNew}
                showModal={showModal}
                editItem={editItem}
            />
            <Main
                contacts={contactListState}
                deleteContactHandle={deleteContactHandle}
                showEditModalWindow={showEditModalWindow}
            />
        </div>
    );
}

export default App;
