import { React, useState, useEffect } from 'react';

export default function AddNewButton(props){
    const [addState, setAddState] = useState(false);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [list, setList] = useState(props.list);

    function questionChangeHandler(event){
        setQuestion(event.target.value);
    }

    function answerChangeHandler(event){
        setAnswer(event.target.value);
    }

    function cancelClickHandler(){
        setAddState(false);
    }

    function addClickHandler(){
        setAddState(true);
    }

    function submitHandler(event) {
        event.preventDefault();
        const newCard = {
            id: Math.random().toString(),
            question: question,
            answer: answer,
        };
        const updatedList = [...list];
        updatedList.splice(props.index + 1, 0, newCard);
        setList(updatedList);
        setAddState(false);
        setQuestion('');
        setAnswer('');
    }

    useEffect(() => {
        props.onSaveAdd(list);
        console.log("add list: ", list);
    }, [list]);

    return (
        <div>
            {addState ? (
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Please input the Question:</label>
                        <input type="text" value={question} onChange={questionChangeHandler} />
                    </div>
                    <div>
                        <label>Please input the Answer:</label>
                        <input type="text" value={answer} onChange={answerChangeHandler} />
                    </div>
                    <button type="submit">Add</button>
                    <button onClick={cancelClickHandler}>Cancel</button>
                </form>
            ) : (
                <button onClick={addClickHandler}>Add New Card</button>
            )}
        </div> 
    )
}