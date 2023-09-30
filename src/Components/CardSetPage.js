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

    function getIdHandler(id){
        const clickedSet = props.list.find((set) => {
            return set.id === id;
        })
        const clickedSetIndex = props.list.findIndex(set => set.id === id);
        props.onSaveChosenSet(clickedSet);
        props.onSaveChosenSetIndex(clickedSetIndex);
        navigate('/quizcard');
    }

    return(
        <div>
            <AddNewCardSet onAddCardSet={addCardSetHandler} />
            <div className="card_set_page">
                {props.list.map((cardset) => {
                    return(
                        <CardSetItem 
                            title={cardset.title} 
                            id={cardset.id} 
                            key={cardset.id} 
                            onCardSetItemClick={getIdHandler}/>
                    )
                })}
            </div>
        </div>
    );
}