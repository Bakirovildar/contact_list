import React from "react";
import './MyInput.css'

const MyInput = ({title, onChange, defaultValue}) => {
    return (
        <div>
            <input
                type="text"
                className='my-input'
                onChange={(e) => onChange(e.target.value)}
                placeholder={title}
                defaultValue={defaultValue}
            />
        </div>
    )
}

export default MyInput