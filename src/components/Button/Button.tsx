import React from "react";
import styles from "./Button.module.css";

interface Props {
  label: string;
  disabled?: boolean;
  onClick?(): void;
}

const Button: React.FC<Props> = ({ label, disabled, onClick }) => {
  return disabled && (label === "Previous" || label === "Next") ? (
    <button className={`${styles.btn} ${styles.btnDisabled}`} onClick={onClick}>
      {label}
    </button>
  ) : label === "Start" ? (
    <button className={`${styles.btn} ${styles.btnGreen}`} onClick={onClick}>
      {label}
    </button>
  ) : label === "Try again" ? (
    <button
      className={`${styles.btn} ${styles.btnGreen} ${styles.btnTryAgain}`}
      onClick={onClick}
    >
      {label}
    </button>
  ) : label === "Next" ? (
    <button
      className={`${styles.btn} ${styles.btnGreen} ${styles.btnNext}`}
      onClick={onClick}
    >
      {label}
    </button>
  ) : label === "Submit" || label === "Restart" ? (
    <button
      className={`${styles.btn} ${styles.btnYellow} ${styles.btnSubmit}`}
      onClick={onClick}
    >
      {label}
    </button>
  ) : label === "Review" ? (
    <button className={`${styles.btn} ${styles.btnRed}`} onClick={onClick}>
      {label}
    </button>
  ) : label === "Previous" ? (
    <button className={`${styles.btn} ${styles.btnGray}`} onClick={onClick}>
      {label}
    </button>
  ) : (
    <button className={`${styles.btnGreen}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
