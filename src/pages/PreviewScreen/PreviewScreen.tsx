import React from "react";
import QuizScreen from "../QuizScreen";

interface Props {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}

const PreviewScreen: React.FC<Props> = ({ setScreen }) => {
  return <QuizScreen setScreen={setScreen} isReviewMode />;
};

export default PreviewScreen;
