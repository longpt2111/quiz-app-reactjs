import React from "react";
import styles from "./QuizQues.module.css";
import quesData from "../../data/shuffledQuestions";

interface Props {
  quesIndex: number;
}

const QuizQues: React.FC<Props> = ({ quesIndex }) => {
  return (
    <div className={styles.container}>
      <div className={styles.quizNumber}>
        Question &nbsp;
        <span className={styles.quizIndex}>{quesIndex + 1}</span>/
        {quesData.length}
      </div>
      <div className={styles.quizQues}>
        {quesData[quesIndex].question_content}
      </div>
    </div>
  );
};

export default QuizQues;
