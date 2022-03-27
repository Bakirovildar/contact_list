const getAllContacts = (): Promise<Array<Contact>> => {
    return fetch('http://localhost:8081/contacts')
        .then(data => data.json())
        .then(json => json.map(contact => ({...contact, id: contact.id})))
}

const deleteContact = (id: string): Promise<any> => {
    return fetch(`http://localhost:8081/contacts/${id}`, {
        method: 'DELETE'
    }).then(r => {
        console.log(`successfully deleted contact with id = ${id}`)
    })
}

const addContact = (contact: any): Promise<Contact> => {
    return fetch('http://localhost:8081/contacts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    }).then(data => data.json())
}

const updateContact = (contact: Contact): Promise<Contact> => {
    return fetch(`http://localhost:8081/contacts/${contact.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    }).then(data => data.json())
}

export {getAllContacts, deleteContact, addContact, updateContact}