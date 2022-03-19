import React from "react";
import './MyInput.css'

const MyInput = ({title, onChange}) => {
    return (
        <div>
            <input
                type="text"
                className='my-input'
                onChange={(e) => onChange(e.target.value)}
                placeholder={title}
            />
        </div>
    )
}

export default MyInput