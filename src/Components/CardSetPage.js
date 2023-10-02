import {useState} from 'react';
import CardSetItem from "./CardSetItem";
import AddNewCardSet from './AddNewCardSet/AddNewCardSet';
import './CardSetPage.css';
import { useNavigate } from 'react-router-dom';

export default function CardSetPage(props){

    function addCardSetHandler(newCardSet){
        props.onAddCardSet2(newCardSet);
    }

    const navigate = useNavigate();

    //find the set user clicked
    function getIdHandler(id){
        const clickedSet = props.list.find((set) => {
            return set.id === id;
        })
        const clickedSetIndex = props.list.findIndex(set => set.id === id);
        props.onSaveChosenSet(clickedSet);            //the set
        props.onSaveChosenSetIndex(clickedSetIndex);  //index of the set
        navigate('/quizcard');
    }

    function deleteHandler(cardsetID){
        props.onSaveDeletedID(cardsetID);
    }

    return(
        <div>
            <AddNewCardSet onAddCardSet={addCardSetHandler} />
            <div className="card_set_page">
                {props.list.map((cardset) => {
                    return(
                        <div key={cardset.id}>
                          <CardSetItem 
                              title={cardset.title} 
                              id={cardset.id} 
                              onCardSetItemClick={getIdHandler}/>
                          <button onClick={() => deleteHandler(cardset.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}