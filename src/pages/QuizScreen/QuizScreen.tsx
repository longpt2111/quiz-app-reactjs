import React, { useState } from "react";
import styles from "./QuizScreen.module.css";
import Button from "../../components/Button";
import QuizQues from "../../components/QuizQues";
import QuizAns from "../../components/QuizAns";
import quesData from "../../data/questions.json";

interface Props {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  isReviewMode?: boolean;
}

const QuizScreen: React.FC<Props> = ({ setScreen, isReviewMode }) => {
  const [quesIndex, setQuesIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.quizControl}>
        {quesIndex === 0 ? (
          <Button label="Previous" disabled />
        ) : (
          <Button
            label="Previous"
            onClick={() => setQuesIndex(quesIndex - 1)}
          />
        )}
        {quesIndex === quesData.length - 1 ? (
          <div className={styles.btnWrapper}>
            <Button label="Next" disabled />
            <Button
              label="Submit"
              onClick={() => {
                if (confirm("Do you want to submit answers ?"))
                  setScreen("score");
              }}
            />
          </div>
        ) : (
          <Button label="Next" onClick={() => setQuesIndex(quesIndex + 1)} />
        )}
        {isReviewMode ? (
          <Button
            label="Restart"
            onClick={() => {
              setScreen("start");
              window.location.reload();
            }}
          />
        ) : (
          ""
        )}
      </div>
      <QuizQues quesIndex={quesIndex} />
      {quesData[quesIndex].answers.map((answer, index) => (
        <QuizAns
          key={index}
          answerContent={answer.answer_content}
          answerIndex={index + 1}
        />
      ))}
    </div>
  );
};

export default QuizScreen;
