import React, { useState } from "react";
import StartScreen from "./pages/StartScreen";
import QuizScreen from "./pages/QuizScreen";
import ScoreScreen from "./pages/ScoreScreen";
import PreviewScreen from './pages/PreviewScreen'

const App: React.FC = () => {
  const [screen, setScreen] = useState<string>("start");

  return (
    <div className="container">
      {screen === "start" ? (
        <StartScreen setScreen={setScreen} />
      ) : screen === "quiz" ? (
        <QuizScreen setScreen={setScreen} />
      ) : screen === "score" ? (
        <ScoreScreen setScreen={setScreen} />
      ) : (
        <PreviewScreen setScreen={setScreen} />
      )}
    </div>
  );
};

export default App;
