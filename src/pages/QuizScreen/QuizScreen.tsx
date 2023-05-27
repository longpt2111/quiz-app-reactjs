import React, { useState } from "react";
import styles from "./QuizScreen.module.css";
import Button from "../../components/Button";
import QuizQues from "../../components/QuizQues";
import QuizAns from "../../components/QuizAns";
import quesData from "../../data/questions.json";
import { UserAnswer } from "../../model";

interface Props {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  isReviewMode?: boolean;
  userAnswers: UserAnswer[];
  setUserAnswers?: React.Dispatch<React.SetStateAction<UserAnswer[]>>;
}

const QuizScreen: React.FC<Props> = ({
  setScreen,
  isReviewMode,
  userAnswers,
  setUserAnswers,
}) => {
  const [quesIndex, setQuesIndex] = useState(0);

  const handleAnswerClick = (selectedAnswer: UserAnswer) => {
    if (setUserAnswers) {
      setUserAnswers((prevUserAnswers) => {
        const updatedUserAnswers = [...prevUserAnswers];
        updatedUserAnswers[quesIndex] = selectedAnswer;
        return updatedUserAnswers;
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.quizControl}>
        <Button
          label="Previous"
          disabled={quesIndex === 0}
          onClick={() => {
            if (quesIndex > 0) setQuesIndex(quesIndex - 1);
          }}
        />
        {quesIndex === quesData.length - 1 ? (
          <div className={styles.btnWrapper}>
            <Button label="Next" disabled />
            {!isReviewMode && (
              <Button
                label="Submit"
                onClick={() => {
                  if (confirm("Do you want to submit answers ?"))
                    setScreen("score");
                }}
              />
            )}
          </div>
        ) : (
          <Button label="Next" onClick={() => setQuesIndex(quesIndex + 1)} />
        )}
        {isReviewMode && (
          <Button
            label="Restart"
            onClick={() => {
              setScreen("start");
              window.location.reload();
            }}
          />
        )}
      </div>
      <QuizQues quesIndex={quesIndex} />
      {quesData[quesIndex].answers.map((answer, index) => (
        <QuizAns
          key={index}
          answerContent={answer.answer_content}
          answerIndex={index + 1}
          disabled={isReviewMode}
          isCorrect={isReviewMode ? answer.correct : false}
          onClick={() => {
            if (!isReviewMode)
              handleAnswerClick({
                questionId: quesIndex + 1,
                selectedAnswerId: index,
                isCorrect: answer.correct,
              });
          }}
          isSelected={userAnswers[quesIndex]?.selectedAnswerId === index}
        />
      ))}
    </div>
  );
};

export default QuizScreen;
