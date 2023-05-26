import React from "react";
import styles from "./ScoreScreen.module.css";
import Button from "../../components/Button";

interface Props {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}

const ScoreScreen: React.FC<Props> = ({ setScreen }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Your score is : <span className={styles.score}>0</span>
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
