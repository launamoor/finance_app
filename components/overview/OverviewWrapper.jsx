"use client";
import React from "react";
import styles from "./styles/OverviewWrapper.module.css";
import { useDataContext } from "@/contexts/dataContext";

const OverviewWrapper = () => {
  const { data } = useDataContext();
  return <div className={styles.wrapper}>Overview</div>;
};

export default OverviewWrapper;
