import React from "react";
import styles from "./styles/PotsSummaryCell.module.css";

const PotsSummaryCell = ({ barColor, summaryCellTitle, summaryCellAmount }) => {
  return (
    <div className={styles.outerWrapper}>
      <div style={{ backgroundColor: barColor }} className={styles.bar}></div>
      <div className={styles.textFlex}>
        <p className={styles.title}>{summaryCellTitle}</p>
        <p className={styles.amount}>{summaryCellAmount}</p>
      </div>
    </div>
  );
};

export default PotsSummaryCell;
