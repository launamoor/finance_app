import React from "react";
import styles from "./styles/LoadingSpinner.module.css";
import { CgSpinnerAlt } from "react-icons/cg";

const LoadingSpinner = () => {
  return (
    <div className={styles.wrapper}>
      <CgSpinnerAlt className={styles.spinner} />
    </div>
  );
};

export default LoadingSpinner;
