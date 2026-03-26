import { useState, useEffect } from "react";
import styles from "./App.module.css";

function DetailedClock() {
  const [timeInfo, setTimeInfo] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    ms: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      setTimeInfo({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        ms: now.getMilliseconds(),
      });
    }, 10);

    return () => clearInterval(timer);
  }, []);

  const pad = (num: number, size = 2) => String(num).padStart(size, "0");
  const msPad = (num: number, size = 3) => String(num).padStart(size, "0");

  return (
    <div className={styles.Wrapper}>
      <div className={styles.clock}>
        <span className={styles.hour}>{pad(timeInfo.hours)}:</span>
        <span className={styles.minute}>{pad(timeInfo.minutes)}:</span>
        <span className={styles.second}>{pad(timeInfo.seconds)}:</span>
        <span className={styles.ms}>{msPad(timeInfo.ms)}</span>
      </div>
    </div>
  );
}

export default DetailedClock;
