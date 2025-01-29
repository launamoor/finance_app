"use client";
import React from "react";
import styles from "./styles/OverviewWrapper.module.css";
import { useDataContext } from "@/contexts/dataContext";
import OverviewDivCard from "./OverviewDivCard";

const OverviewWrapper = () => {
  const { data } = useDataContext();

  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <h1 className={styles.title}>Overview</h1>
        <div className={styles.overviewDiv}>
          <OverviewDivCard
            color="dark"
            title="Current Balance"
            value={data?.balance?.current.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          />
          <OverviewDivCard
            color="light"
            title="Income"
            value={data?.balance?.income.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          />
          <OverviewDivCard
            color="light"
            title="Expenses"
            value={data?.balance?.expenses.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewWrapper;
