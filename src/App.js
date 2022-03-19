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
    const [valueName, setValueName] =useState('')
    const [valueNumber, setValueNumber] =useState('')

    const addNewContactHandle = () => {
        const newContact = {name: valueName, number: valueNumber, id: Date.now()}
        const newContacts = {contacts:[ newContact, ...state.contacts ]}
        setState(newContacts)
        setShowModal(!showModal)
    }

    const deleteContactHandle = (id) => {
        console.log(id)
    }

    return (
    <div className="App">
        <Header
            numberValue={(value) => setValueNumber(value)}
            nameValue={(value) => setValueName(value)}
            addNewContactHandle={addNewContactHandle}
            setShowModal={() => setShowModal(!showModal)}
            showModal={showModal}
        />
        <Main
            contacts={state.contacts}
            deleteContactHandle={deleteContactHandle}
        />
    </div>
  );
}

export default App;
