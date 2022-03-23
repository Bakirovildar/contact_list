import React from "react";
import './MyInput.css'

interface ChildProps {
    title: string,
    onChange: (value: string) => void,
    defaultValue: string,
    nameDirty: string,
    nameError: string,
    numberDirty: string,
    numberError: string
}

const MyInput: React.FC<ChildProps> = (props) => {
    return (
        <div>
            <input
                type="text"
                className='my-input'
                onChange={(e) => props.onChange(e.target.value)}
                placeholder={props.title}
                defaultValue={props.defaultValue}
            />
            {(props.numberDirty && props.numberError) && <div style={{color: 'red', fontSize: '14px'}}>{props.numberError}</div>}
            {(props.nameDirty && props.nameError) && <div style={{color: 'red', fontSize: '14px'}}>{props.nameError}</div>}
        </div>
    )
}

export default MyInput