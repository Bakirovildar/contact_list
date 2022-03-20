import React from "react";
import './MyInput.css'

const MyInput = ({title, onChange, defaultValue, nameDirty, nameError, numberDirty, numberError}) => {
    return (
        <div>
            <input
                type="text"
                className='my-input'
                onChange={(e) => onChange(e.target.value)}
                placeholder={title}
                defaultValue={defaultValue}
            />
            {(numberDirty && numberError) && <div style={{color: 'red', fontSize: '14px'}}>{numberError}</div>}
            {(nameDirty && nameError) && <div style={{color: 'red', fontSize: '14px'}}>{nameError}</div>}
        </div>
    )
}

export default MyInput