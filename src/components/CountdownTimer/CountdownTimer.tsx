import React, { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

interface Props {
  minutes: number;
  seconds: number;
  onFinish(): void;
  isReviewMode: boolean | undefined;
}

const CountdownTimer: React.FC<Props> = ({
  minutes,
  seconds,
  onFinish,
  isReviewMode,
}) => {
  const [remainingTime, setRemainingTime] = useState(minutes * 60 + seconds);

  useEffect(() => {
    let intervalId: number | undefined;

    if (!isReviewMode)
      if (remainingTime > 0) {
        intervalId = setInterval(() => {
          setRemainingTime((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(intervalId);
              onFinish();
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);
      } else {
        onFinish();
      }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [remainingTime, onFinish, isReviewMode]);

  const formattedMinutes = Math.floor(remainingTime / 60)
    .toString()
    .padStart(2, "0");
  const formattedSeconds = (remainingTime % 60).toString().padStart(2, "0");
  const progress = (remainingTime / (minutes * 60 + seconds)) * 226.19;

  return (
    <div className={styles.container}>
      <div className={styles.timer}>
        <div className={styles.circle}>
          {!isReviewMode ? (
            <>
              <svg className={styles.svg}>
                <circle
                  className={styles.circleBackground}
                  r="36"
                  cx="40"
                  cy="40"
                ></circle>
                <circle
                  className={styles.circleProgress}
                  r="36"
                  cx="40"
                  cy="40"
                  style={{
                    strokeDashoffset: 226.19 - progress,
                  }}
                ></circle>
              </svg>
              <div className={styles.time}>
                <span>{formattedMinutes}</span>:<span>{formattedSeconds}</span>
              </div>
            </>
          ) : (
            <div className={`${styles.time} ${styles.timerEnd}`}>
              <span>End!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
