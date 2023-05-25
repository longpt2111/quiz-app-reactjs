import React from "react";
import styles from "./Button.module.css";

interface Props {
  label: string;
  clickable: boolean;
}

const Button: React.FC<Props> = ({ label, clickable }) => {
  return label === "Start" ? (
    <button className={`${styles.btn} ${styles.btnGreen}`}>{label}</button>
  ) : label === "Try again" ? (
    <button
      className={`${styles.btn} ${styles.btnGreen} ${styles.btnTryAgain}`}
    >
      {label}
    </button>
  ) : label === "Next" ? (
    <button className={`${styles.btn} ${styles.btnGreen} ${styles.btnNext}`}>
      {label}
    </button>
  ) : label === "Submit" || label === "Restart" ? (
    <button className={`${styles.btn} ${styles.btnYellow} ${styles.btnSubmit}`}>
      {label}
    </button>
  ) : label === "Review" ? (
    <button className={`${styles.btn} ${styles.btnRed}`}>{label}</button>
  ) : label === "Previous" ? (
    <button className={`${styles.btn} ${styles.btnGray}`}>{label}</button>
  ) : (
    <button className={`${styles.btnGreen}`}>{label}</button>
  );
};

export default Button;
