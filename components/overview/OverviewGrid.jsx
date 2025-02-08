import React from "react";
import styles from "./styles/OverviewGrid.module.css";

const OverviewGrid = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default OverviewGrid;
