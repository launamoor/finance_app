import React from "react";
import styles from "./styles/CardWrapper.module.css";

const CardWrapper = ({ children, className }) => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
};

export default CardWrapper;
