import React from "react";
import styles from "./styles/OverviewGrid.module.css";
import OverviewPotsCard from "./OverviewPotsCard";
import OverviewBudgetsWrapper from "./OverviewBudgetsWrapper";
import OverviewTransactionsWrapper from "./OverviewTransactionsWrapper";
import OverviewRecurringBillsWrapper from "./OverviewRecurringBillsWrapper";

// const OverviewGrid = ({ children }) => {
//   return <div className={styles.wrapper}>{children}</div>;
// };

// export default OverviewGrid;

const OverviewGrid = () => {
  return (
    <div className={styles.flexWrapper}>
      <div className={styles.leftCol}>
        <OverviewPotsCard />
        <OverviewTransactionsWrapper />
      </div>
      <div className={styles.rightCol}>
        <OverviewBudgetsWrapper />
        <OverviewRecurringBillsWrapper />
      </div>
    </div>
  );
};

export default OverviewGrid;
