import React from "react";
import styles from "./QuizAns.module.css";

interface Props {
  answerContent: string;
  answerIndex: number;
  disabled?: boolean;
  isCorrect?: boolean;
}

const QuizAns: React.FC<Props> = ({
  answerContent,
  answerIndex,
  disabled,
  isCorrect,
}) => {
  return disabled ? (
    <div
      className={
        isCorrect
          ? `${styles.disabledContainer}  ${styles.correctAns}`
          : styles.disabledContainer
      }
    >
      <p>{`${answerIndex}) ${answerContent}`}</p>
    </div>
  ) : (
    <div className={styles.container}>
      <p>{`${answerIndex}) ${answerContent}`}</p>
    </div>
  );
};

export default QuizAns;
