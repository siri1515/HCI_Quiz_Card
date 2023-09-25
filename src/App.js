import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardBlock from './Components/CardBlock';
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
          <Route path="/quizcard" element={<CardBlock list={chosenSet.cards} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
