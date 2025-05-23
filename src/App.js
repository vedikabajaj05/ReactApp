import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateAccount from './components/Createaccount';
import Gender from './components/Gender';
import Question1 from './components/question1';
import Question2 from './components/Question2';
import YesNo from './components/YesNo';
import Scan from './components/Scan';
import Predictions from './components/Prediction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/gender" element={<Gender />} /> 
        <Route path="/question1" element={<Question1 />} /> 
        <Route path="/question2" element={<Question2 />} />
        <Route path="/yesno" element={<YesNo />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/prediction" element={<Predictions />} />
      </Routes>
    </Router>
  );
}

export default App;
