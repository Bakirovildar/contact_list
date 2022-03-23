import React from "react";
import './MyButton.css'

interface childProps {
    onClick: () => any,
    cls: string,
    title: string
}

const MyButton: React.FC<childProps> = (props) => {

    return (
        <div>
            <div
                className={props.cls}
                onClick={props.onClick}
            ><span>{props.title}</span></div>
        </div>

    )
}

export default MyButton