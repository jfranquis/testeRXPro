import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import QuizInstrucoes from './components/quiz/QuizInstrucoes';


function App() {
  return (
    <Router>
      <Route path="/" exact  component={Home} />
      <Route path="/play/instructions"  exact component={QuizInstrucoes} />
</Router>
  );
}

export default App;
