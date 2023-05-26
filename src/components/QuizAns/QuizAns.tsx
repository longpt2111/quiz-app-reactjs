import React from "react";
import styles from "./QuizAns.module.css";

interface Props {
  answerContent: string;
  answerIndex: number;
}

const QuizAns: React.FC<Props> = ({ answerContent, answerIndex }) => {
  return (
    <div className={styles.container}>
      <p>{`${answerIndex}) ${answerContent}`}</p>
    </div>
  );
};

export default QuizAns;
