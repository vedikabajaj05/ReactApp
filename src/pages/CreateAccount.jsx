import React, { useState } from "react";
import Header from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/components/Header.jsx";
import Input from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/components/Input.jsx";
import ProgressBar from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/components/ProgressBar.jsx";
import Button from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/components//Button.jsx";


const CreateAccount = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Input type="text" placeholder="Full Name" />;
      case 2:
        return <Input type="date" placeholder="Date of Birth" />;
      case 3:
        return (
          <select style={{ width: "100%", padding: "10px", margin: "10px 0" }}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        );
      case 4:
        return (
          <>
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
          </>
        );
      default:
        return <p>All steps completed!</p>;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header title="Create Account" />
      <ProgressBar progress={(step / 4) * 100} />
      {renderStep()}
      {step < 4 && <Button text="Continue" onClick={() => setStep(step + 1)} primary />}
      {step === 4 && <Button text="Finish" primary />}
    </div>
  );
};

export default CreateAccount;
