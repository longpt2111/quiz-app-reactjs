import React from "react";
import QuizScreen from "../QuizScreen";
import { UserAnswer } from "../../model";

interface Props {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  userAnswers: UserAnswer[];
}

const PreviewScreen: React.FC<Props> = ({ setScreen, userAnswers }) => {
  return (
    <QuizScreen setScreen={setScreen} isReviewMode userAnswers={userAnswers} />
  );
};

export default PreviewScreen;
