import React from "react";
import './Main.css'

const Main = ({contacts}) => {
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
                            
                            <span>у</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Main