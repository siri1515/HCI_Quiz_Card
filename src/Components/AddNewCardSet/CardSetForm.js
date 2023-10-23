import { React, useState } from 'react';
import styles from './CardSetForm.module.css'; 

export default function CardSetForm(props){
    const [newCardSetName, setNewCardSetName] = useState('');
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswer, setNewAnswer] = useState('');

    function cardSetChangeHandler(event){
        setNewCardSetName(event.target.value);
    }

    function questionChangeHandler(event){
        setNewQuestion(event.target.value);
    }

    function answerChangeHandler(event){
        setNewAnswer(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        const cardSetData = {
            title: newCardSetName,
            cards: []
        }
        props.onSaveCardSetData(cardSetData);   
        setNewCardSetName('');
    }

    function cancelHandler(){
        props.onDeleteForm(true);
    }

    return(
        <div className={styles.modal_background}>
            <div className={styles.popup_form}>
                <h1>Let's Add Your New Cardset!</h1>
                <form className={styles.cardset_form} onSubmit={submitHandler}>
                    <div>
                        <label>Please input your new cardset name:</label>
                        <input type="text" value={newCardSetName} onChange={cardSetChangeHandler} />
                    </div>
                    <div>
                        <label>Please input your first quiz card question:</label>
                        <input type="text" value={newQuestion} onChange={questionChangeHandler} />
                    </div>
                    <div>
                        <label>Please input your first quiz card answer:</label>
                        <input type="text" value={newAnswer} onChange={answerChangeHandler} />
                    </div>
                    <div>
                        <button onClick={cancelHandler}><b>Cancel</b></button>
                        <button type="submit"><b>Add New Cardset</b></button>
                    </div>
                </form>
            </div>
        </div>
    )
}