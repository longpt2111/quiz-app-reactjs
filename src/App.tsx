import React, { useState, useEffect } from "react";
import StartScreen from "./pages/StartScreen";
import QuizScreen from "./pages/QuizScreen";
import ScoreScreen from "./pages/ScoreScreen";
import PreviewScreen from "./pages/PreviewScreen";
import { UserAnswer } from "./model";

const App: React.FC = () => {
  const [screen, setScreen] = useState<string>("start");
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  useEffect(() => {
    console.log(userAnswers);
  });

  return (
    <div className="container">
      {screen === "start" ? (
        <StartScreen setScreen={setScreen} />
      ) : screen === "quiz" ? (
        <QuizScreen
          setScreen={setScreen}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
        />
      ) : screen === "score" ? (
        <ScoreScreen setScreen={setScreen} userAnswers={userAnswers} />
      ) : (
        <PreviewScreen setScreen={setScreen} userAnswers={userAnswers} />
      )}
    </div>
  );
};

export default App;
