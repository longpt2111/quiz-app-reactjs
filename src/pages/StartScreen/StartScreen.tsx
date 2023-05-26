import React from "react";
import styles from "./StartScreen.module.css";
import Button from "../../components/Button";

const StartScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to React Quiz Game!</h1>
      <Button label="Try again" clickable />
    </div>
  );
};

export default StartScreen;
