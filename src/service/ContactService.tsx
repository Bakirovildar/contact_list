const getAllContacts = () => {
    return fetch('http://localhost:8081/contacts')
        .then(data => data.json())
        .then(json => json.map(contact => ({...contact, id: contact.id})))
}

const deleteContact = (id:string) => {
    fetch(`http://localhost:8081/contacts/${id}`, {
        method: 'DELETE'
    }).then(r => {
        console.log(`successfully deleted contact with id = ${id}`)
    })
}

const addContact = (contact:any) => {
    console.log(JSON.stringify(contact))
    fetch('http://localhost:8081/contacts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    }).then(r => {
        console.log(`successfully added contact ${contact}`)
    })
}

const updateContact = (contact:any) => {
    fetch(`http://localhost:8081/contacts/${contact.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    }).then(r => {
        console.log(`successfully updated contact ${contact}`)
    })
}

export {getAllContacts, deleteContact, addContact, updateContact}