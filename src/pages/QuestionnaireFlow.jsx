import Header from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/components/Header.jsx";
import QuestionnaireOption from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/components/QuestionnaireOption.jsx";
import React from "react";
import Button from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/components//Button.jsx";
const QuestionnaireFlow = () => {
  const questions = [
    { text: "What are your health goals?", options: ["Energy", "Immunity", "Focus"] },
    { text: "Do you feel sick often?", options: ["Yes", "No"] }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Header title="Questionnaire" />
      <p style={{ margin: "20px 0" }}>{questions[0].text}</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {questions[0].options.map((option, index) => (
          <QuestionnaireOption key={index} text={option} />
        ))}
      </div>
      <Button text="Next" primary />
    </div>
  );
};

export default QuestionnaireFlow;
