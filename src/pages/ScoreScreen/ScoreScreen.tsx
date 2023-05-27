import React from "react";
import styles from "./ScoreScreen.module.css";
import Button from "../../components/Button";
import { UserAnswer } from "../../model";

interface Props {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  userAnswers: UserAnswer[];
}

const ScoreScreen: React.FC<Props> = ({ setScreen, userAnswers }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Your score is :{" "}
        <span className={styles.score}>
          {userAnswers.filter((userAnswer) => userAnswer?.isCorrect).length}
        </span>
      </h1>
      <div className={styles.scoreControl}>
        <Button
          label="Try again"
          onClick={() => {
            setScreen("start");
            window.location.reload();
          }}
        />
        <Button label="Review" onClick={() => setScreen("review")} />
      </div>
    </div>
  );
};

export default ScoreScreen;
