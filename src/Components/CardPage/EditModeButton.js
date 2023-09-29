import { React, useState } from "react";
import './EditModeButton.css';

export default function EditModeButton(props){
    const [editMode, setEditMode] = useState(false);
    const [modeState, setModeState] = useState('Enter');

    function editClickHandler(){
        if(modeState === 'Enter')
        {
            setModeState('Quit');
        }
        else{
            setModeState('Enter');
        }

        setEditMode(!editMode);
    }

    return(
        <nav className="navbar">
            <div className="title">{props.setTitle}</div>
            <button className="edit-mode-button" onClick={editClickHandler}>
                {modeState + ' Edit Mode'}
            </button>
        </nav>
    )
}