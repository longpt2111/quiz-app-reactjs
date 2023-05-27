import React from "react";
import styles from "./QuizAns.module.css";

interface Props {
  answerContent: string;
  answerIndex: number;
  disabled?: boolean;
  isCorrect: boolean;
  onClick(): void;
  isSelected: boolean;
}

const QuizAns: React.FC<Props> = ({
  answerContent,
  answerIndex,
  disabled,
  isCorrect,
  onClick,
  isSelected,
}) => {
  return disabled ? (
    <div
      className={
        isCorrect
          ? `${styles.disabledContainer}  ${styles.correctAns}`
          : isSelected
          ? `${styles.disabledContainer} ${styles.wrongSelectedAns}`
          : styles.disabledContainer
      }
    >
      <p>{`${answerIndex}) ${answerContent}`}</p>
    </div>
  ) : (
    <div
      className={
        isSelected
          ? `${styles.container} ${styles.selectedAns}`
          : styles.container
      }
      onClick={onClick}
    >
      <p>{`${answerIndex}) ${answerContent}`}</p>
    </div>
  );
};

export default QuizAns;
