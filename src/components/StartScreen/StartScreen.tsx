import React from "react";
import Button from "../../shared/Button";
import styles from "./StartScreen.module.css";

const StartScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to React Quiz Game!</h1>
      <Button label="Restart" clickable />
    </div>
  );
};

export default StartScreen;
