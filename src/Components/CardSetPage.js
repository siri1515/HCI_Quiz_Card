import {useState} from 'react';
import CardSetItem from "./CardSetItem";
import AddNewCardSet from './AddNewCardSet/AddNewCardSet';
import './CardSetPage.css';
import { useNavigate } from 'react-router-dom';

const data = [
    {
      id: 1,
      title: 'Card Set 1',
      cards: [
        {
          id: 1,
          question: 'Question 1',
          answer: 'Answer 1',
        },
        {
          id: 2,
          question: 'Question 2',
          answer: 'Answer 2',
        },
      ],
    },
    {
      id: 2,
      title: 'Card Set 2',
      cards: [
        {
          id: 1,
          question: 'Question 1',
          answer: 'Answer 1',
        },
        {
          id: 2,
          question: 'Question 2',
          answer: 'Answer 2',
        },
        {
          id: 3,
          question: 'Question 3',
          answer: 'Answer 3',
        },
      ],
    },
];

export default function CardSetPage(props){

    const[list, setList] = useState(data);

    function addCardSetHandler(newCardSet){
        setList((prevCardSet) => {
            return [newCardSet, ...prevCardSet];
        })
    }
    console.log("updated list: ", list);

    const navigate = useNavigate();

    function getIdHandler(id){
        const clickedSet = list.find((set) => {
            return set.id === id;
        })
        props.onSaveChosenSet(clickedSet);
        navigate('/quizcard');
    }

    return(
        <div>
            <AddNewCardSet onAddCardSet={addCardSetHandler} />
            <div className="card_set_page">
                {list.map((cardset) => {
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