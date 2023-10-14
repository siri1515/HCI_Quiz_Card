import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardPage from './Components/CardPage/CardPage';
import CardSetPage from './Components/CardSetPage';
import ChatgptApi from './Components/ChatgptApi';

//changes
const data = [
  {
    id: 100001,
    key: 100001,
    title: 'Card Set 1',
    cards: [
      {
        id: 902,
        question: 'Question 1',
        answer: 'Answer 1',
      },
      {
        id: 367,
        question: 'Question 2',
        answer: 'Answer 2',
      },
    ],
  },
  {
    id:28647,
    key: 28647,
    title: 'Card Set 2',
    cards: [
      {
        id: 979,
        question: 'Question 1',
        answer: 'Answer 1',
      },
      {
        id: 5634,
        question: 'Question 2',
        answer: 'Answer 2',
      },
      {
        id: 3542,
        question: 'Question 3',
        answer: 'Answer 3',
      },
    ],
  },
];


function App() {

  const[list, setList] = useState(data);
  const [chosenSet, setChosenSet] = useState('');
  const [chosenIndex, setChosenIndex] = useState('');

  function saveChosenSetHandler(chosenSet){
    setChosenSet(chosenSet);
  }

  function saveChosenSetIndexHandler(i){
    setChosenIndex(i);
  }

  //add new cardset
  function addCardSetHandler2(newCardSet){
    setList((prevCardSet) => {
      return [newCardSet, ...prevCardSet];
    })
  }

  //delete quiz card user clicked by index
  function indexDeleteHandler2(index){
    const updatedList = list.map((cardset, setIndex) => {
      if (setIndex === chosenIndex) {
        const updatedCards = cardset.cards.filter((_, i) => i !== index);
        return { ...cardset, cards: updatedCards };
      }
      return cardset;
    });

    if (chosenSet && chosenSet.id === updatedList[chosenIndex].id) {
      setChosenSet(updatedList[chosenIndex]);
    }
    setList(updatedList);
  }

  function deleteIDHandler(cardsetID){
    setList(list.filter(cardset => cardset.id !== cardsetID));
  }

  //user change the card content
  function changeHandler(newList){
    const updatedList = list.map((cardset) => {
      if(cardset.id === chosenSet.id){
        return {
          ...cardset,
          cards: newList,
        };
      }
      return cardset;
    })
    setList(updatedList);
  }

  function addHandler(newList){
    const updatedList = list.map((cardset) => {
      if(cardset.id === chosenSet.id){
        return {
          ...cardset,
          cards: newList,
        };
      }
      return cardset;
    })

    list.map((cardset) => {
      if(cardset.id === chosenSet.id){
        setChosenSet(cardset);
      }
      return '';
    })
    setList(updatedList);
    console.log("chosen: ", chosenSet);
    console.log("new: ", list);
  }


  return (
    <Router>
      <div>
        <Routes>
          <Route  path="/" 
                  element={
                            <CardSetPage 
                              list={list}
                              onAddCardSet2={addCardSetHandler2}
                              onSaveChosenSet={saveChosenSetHandler} 
                              onSaveChosenSetIndex={saveChosenSetIndexHandler}
                              onSaveDeletedID={deleteIDHandler}
                            />
                          } 
          />
          <Route  path="/quizcard" 
                  element={
                            <CardPage 
                              list={chosenSet.cards} 
                              setTitle={chosenSet.title} 
                              onSaveDeletedIndex2={indexDeleteHandler2}
                              onSaveChanges={changeHandler} 
                              onSaveAdd={addHandler}
                            />
                          } 
          />
          <Route  path="/ai_generator" 
                  element={
                            <ChatgptApi
                            />
                          } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
