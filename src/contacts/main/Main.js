import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Main.css'

const Main = ({contacts, deleteContactHandle}) => {
    return (
        <div className='main'>
            <div className='container-contacts'>
                {contacts.map(contact => {
                    return (
                        <div
                            className='container-contact'
                            key={contact.id}
                        >
                            <div className='number'>{contact.number}</div>
                            <div className='phone'>{contact.name}</div>
                            <div className='icons'>
                                <EditIcon className='edit'/>
                                <DeleteIcon
                                    className='delete'
                                    // onClick={() => deleteContactHandle(contact.id)}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Main