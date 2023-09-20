import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardBlock from './Components/CardBlock';
import CardSetPage from './Components/CardSetPage';
//example
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

function App() {

  const [chosenSet, setChosenSet] = useState('');

  //from CardSetItem component
  function getIdHandler2(id){
    const newList = data.find((set) => {
      return set.id === id;
    })
    setChosenSet(newList);
  }
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CardSetPage list={data} onCardSetItemClick2={getIdHandler2}/>} />
          <Route path="/quizcard" element={<CardBlock list={chosenSet.cards} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
