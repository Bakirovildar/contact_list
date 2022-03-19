import React from "react";
import './MyButton.css'

const MyButton = ({onClick, title, cls}) => {

    return (
            <div
                className={cls}
                onClick={onClick}
            ><span>{title}</span></div>
    )
}

export default MyButton