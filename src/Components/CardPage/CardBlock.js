import { React, useState, useEffect } from "react";
import './CardBlock.css';
import EditButton from "./EditButton";
import AddNewButton from "./AddNewButton";
import PropTypes from 'prop-types';

export default function CardBlock(props) {

    const [index, setIndex] = useState(0);
    const [prevDisabled, setPrevDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(true);
    const [side, setSide] = useState(true);  // true is front, false is back
    const [isFlipping, setIsFlipping] = useState(false);

    function prevClickHandler() {
        setIndex(index - 1);
    }

    function nextClickHandler() {
        setIndex(index + 1);
    }

    function cardClickHandler() {
        setSide(!side);
    }

    function updateButtonStates() {
        if (index === 0) {
            setPrevDisabled(true);
        } else {
            setPrevDisabled(false);
        }

        if (index === props.list.length - 1) {
            setNextDisabled(true);
        } else {
            setNextDisabled(false);
        }
    }

    function deleteHandler() {
        props.onSaveDeletedIndex(index);
    }

    useEffect(() => {
        updateButtonStates();
    }, [index]);

    function changeHandler(newList) {
        props.onSaveChanges(newList);
    }

    function addHandler(newList) {
        props.onSaveAdd(newList);
    }

    return (
        <div>
            <div className="list_block">
                {
                    props.editState === true ? 
                    (
                        <div>
                            <AddNewButton list={props.list} index={index} onSaveAdd={addHandler} />
                            <EditButton list={props.list} index={index} onSaveChanges={changeHandler} />
                            <button onClick={deleteHandler}>Delete</button>
                        </div>
                    ) : ''
                }
                {/* <div className={`card ${isFlipping ? 'flipping' : ''}`} onClick={cardClickHandler}>
                    {side ? props.list[index].question : props.list[index].answer}
                </div> */}

                <div className={`card ${!side ? 'flipping' : ''}`} onClick={cardClickHandler}>

                    <div className="card-content card-front">
                        {props.list[index].question}
                    </div>
                    <div className="card-content card-back">
                        {props.list[index].answer}
                    </div>
                </div>


                <div className="button_block">
                    <button onClick={prevClickHandler} disabled={prevDisabled}>Previous</button>
                    <div className="index_block">
                        <div>{index + 1}</div>
                        <div>{'/'}</div>
                        <div>{props.list.length}</div>
                    </div>
                    <button onClick={nextClickHandler} disabled={nextDisabled}>Next</button>
                </div>
            </div>
        </div>
    );
}