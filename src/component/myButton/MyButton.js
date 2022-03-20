import React from "react";
import './MyButton.css'

const MyButton = ({onClick, title, cls}) => {

    return (
        <div>
            <div
                className={cls}
                onClick={onClick}
            ><span>{title}</span></div>
        </div>

    )
}

export default MyButton