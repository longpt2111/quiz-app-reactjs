import React, { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

interface Props {
  minutes: number;
  seconds: number;
  onFinish(): void;
  isReviewMode: boolean | undefined;
  timeBeforeConfirm: number;
  timeAfterConfirm: number;
}

const CountdownTimer: React.FC<Props> = ({
  minutes,
  seconds,
  onFinish,
  isReviewMode,
  timeBeforeConfirm,
  timeAfterConfirm,
}) => {
  const [remainingTime, setRemainingTime] = useState(minutes * 60 + seconds);

  useEffect(() => {
    let intervalId: number | undefined;

    if (!isReviewMode && remainingTime > 0) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalId);
            setTimeout(onFinish, 500);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setRemainingTime(
      (prevTime) =>
        prevTime - Math.floor((timeAfterConfirm - timeBeforeConfirm) / 1000)
    );
  }, [timeBeforeConfirm, timeAfterConfirm]);

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
                  className={
                    remainingTime <= 4
                      ? `${styles.circleProgress} ${styles.timerEnd}`
                      : styles.circleProgress
                  }
                  r="36"
                  cx="40"
                  cy="40"
                  style={{
                    strokeDashoffset: 226.19 - progress,
                  }}
                ></circle>
              </svg>
              <div
                className={
                  remainingTime <= 4
                    ? `${styles.time} ${styles.timerEnd}`
                    : styles.time
                }
              >
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
