import React from "react";
import './MyInput.css'

interface ChildProps {
    title: string,
    onChange: (value: string) => void,
    defaultValue: string,
    isError: boolean,
    errorText: string,
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
            {(props.isError && props.errorText) &&
            <div style={{color: 'red', fontSize: '14px'}}>{props.errorText}</div>}
        </div>
    )
}

export default MyInput