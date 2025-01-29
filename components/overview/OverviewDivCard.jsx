import React from "react";
import styles from "./styles/OverviewDivCard.module.css";

const OverviewDivCard = ({ value, color, title }) => {
  return (
    <div
      className={color === "dark" ? styles.darkWrapper : styles.lightWrapper}
    >
      <div className={styles.innerWrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{value}</div>
      </div>
    </div>
  );
};

export default OverviewDivCard;
