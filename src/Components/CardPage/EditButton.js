import { useState } from "react"

export default function EditButton(props){

    const [editState, setEditState] = useState(false);
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswer, setNewAnswer] = useState('');

    function questionChangeHandler(event){
        setNewQuestion(event.target.value);
    }

    function answerChangeHandler(event){
        setNewAnswer(event.target.value);
    }

    function editClickHandler(){
        setEditState(true);
    }

    function cancelClickHandler(){
        setEditState(false);
    }

    function submitHandler(event){
        event.preventDefault();
        const newList = [...props.list];
        newList[props.index].question = newQuestion;
        newList[props.index].answer = newAnswer;
        console.log('editlist', newList)

        props.onSaveChanges(newList);
        setEditState(false);
    }

    return(
        <div>
            {editState ? (
                <form onSubmit={submitHandler}>
                    <div>
                        <label>New Question:</label>
                        <input type="text" value={newQuestion} onChange={questionChangeHandler} />
                    </div>
                    <div>
                        <label>New Answer:</label>
                        <input type="text" value={newAnswer} onChange={answerChangeHandler} />
                    </div>
                    <button type="submit">Save</button>
                    <button onClick={cancelClickHandler}>Cancel</button>
                </form>
            ) : (
                <button onClick={editClickHandler}>Edit</button>
            )}
        </div>
    )
}