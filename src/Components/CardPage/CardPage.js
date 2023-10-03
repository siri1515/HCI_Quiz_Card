import { React, Fragment, useState } from "react";
import CardBlock from "./CardBlock";
import './CardPage.css';

export default function CardPage(props){
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

    function indexDeleteHandler(index){
        props.onSaveDeletedIndex2(index);
    }

    function changeHandler(newList){
        props.onSaveChanges(newList);
    }

    if (props.list.length > 0){
        return(
            <Fragment>
                <nav className="navbar">
                    <div className="title">{props.setTitle}</div>
                    <button className="edit-mode-button" onClick={editClickHandler}>
                        {modeState + ' Edit Mode'}
                    </button>
                </nav>
                <CardBlock 
                    list={props.list} 
                    editState={editMode} 
                    onSaveDeletedIndex={indexDeleteHandler} 
                    onSaveChanges={changeHandler}
                />
            </Fragment>
        )
    }
    else{
        return(
            <div>
                there's no card yet
            </div>
        )
    }
}