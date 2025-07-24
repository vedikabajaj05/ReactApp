import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/compnents/Home.js';
import CreateAccount from 'C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/compnents/Createaccount.js';
import Gender from 'C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/compnents/Gender.js';
import Question1 from 'C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/compnents/question1.js'; 
import Question2 from 'C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/compnents/Question2.js'; 
import YesNo from 'C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/compnents/YesNo.js'; 
import Scan from 'C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/compnents/Scan.js'; 
import Predictions from 'C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/compnents/Prediction.js'; 
import RandomProducts from 'C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/compnents/RandomProduct.js';
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
        <Route path="/randomproducts" element={<RandomProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
