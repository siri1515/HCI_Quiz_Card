import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardPage from './Components/CardPage/CardPage';
import CardSetPage from './Components/CardSetPage';

function App() {

  const [chosenSet, setChosenSet] = useState('');

  function saveChosenSetHandler(chosenSet){
    setChosenSet(chosenSet);
  }
  console.log("chosenset", chosenSet);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CardSetPage onSaveChosenSet={saveChosenSetHandler} />} />
          <Route path="/quizcard" element={<CardPage list={chosenSet.cards} setTitle={chosenSet.title} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
