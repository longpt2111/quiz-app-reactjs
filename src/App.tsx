import React, { useState } from "react";
import StartScreen from "./pages/StartScreen";
import QuizScreen from "./pages/QuizScreen";
import ScoreScreen from "./pages/ScoreScreen";
import PreviewScreen from "./pages/PreviewScreen";
import { UserAnswer } from "./model";

const App: React.FC = () => {
  const [screen, setScreen] = useState<string>("start");
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

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
        <ScoreScreen setScreen={setScreen} />
      ) : (
        <PreviewScreen setScreen={setScreen} userAnswers={userAnswers} />
      )}
    </div>
  );
};

export default App;
