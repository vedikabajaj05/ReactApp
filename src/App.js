import React from "react";
import Login from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/pages/Login.jsx";
import OTP from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/pages/OTP.jsx";
import CreateAccount from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/pages/CreateAccount.jsx";
import QuestionnaireFlow from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/pages/QuestionnaireFlow.jsx";

const App = () => {
  return (
    <div>
      {/* Uncomment one page at a time to view */}
      <Login />
      {<OTP />}
      {<CreateAccount />}
      {<QuestionnaireFlow />}
    </div>
  );
};

export default App;
