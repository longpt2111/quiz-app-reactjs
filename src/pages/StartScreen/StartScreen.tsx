import React from "react";
import styles from "./StartScreen.module.css";
import Button from "../../components/Button";

interface Props {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}

const StartScreen: React.FC<Props> = ({ setScreen }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to React Quiz Game!</h1>
      <Button label="Start" onClick={() => setScreen("quiz")} />
    </div>
  );
};

export default StartScreen;
