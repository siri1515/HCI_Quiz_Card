import { React, useState, useEffect } from "react";
import './CardBlock.css';

export default function CardBlock(props){
    const [index, setIndex] = useState(0);
    const [prevDisabled, setPrevDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(true);

    //true is front, false is back
    const [side, setSide] = useState(true);

    function prevClickHandler(){
        setIndex(index-1);
    }

    function nextClickHandler(){
        setIndex(index+1);
    }

    function cardClickHandler(){
        setSide(!side);
    }

    function updateButtonStates(){
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
    };

    useEffect(() => {
        updateButtonStates();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    console.log(props.list);

    return(
        <div className="list_block">
            <div className="card" onClick={cardClickHandler}>
                {side===true ? props.list[index].question : props.list[index].answer}
            </div>
            <div className="button_block">
                <button onClick={prevClickHandler} disabled={prevDisabled}>Previous</button>
                <div className="index_block">
                    <div>{index+1}</div>
                    <div>{'/'}</div>
                    <div>{props.list.length}</div>
                </div>
                <button onClick={nextClickHandler} disabled={nextDisabled}>Next</button>
            </div>
        </div>
    )
}