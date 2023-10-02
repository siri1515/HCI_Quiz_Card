import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardPage from './Components/CardPage/CardPage';
import CardSetPage from './Components/CardSetPage';

const data = [
  {
    id: 1,
    key: 1,
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
    key: 2,
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
  console.log('list: ', list);


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
                              onSaveDeletedIndex2={indexDeleteHandler2} />
                          } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
