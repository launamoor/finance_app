import React from "react";
import styles from "./styles/OverviewRecurringBillsWrapper.module.css";
import CardWrapper from "../shared/CardWrapper";
import CardNavigationButton from "../shared/CardNavigationButton";
import { useDataContext } from "@/contexts/dataContext";
import LoadingSpinner from "../shared/LoadingSpinner";

const OverviewRecurringBillsWrapper = () => {
  const { data } = useDataContext();

  if (!data) return <LoadingSpinner />;
  return (
    <CardWrapper className={""}>
      <div className={styles.outerWrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.titleFlex}>
            <h3 className={styles.billsTitle}>Recurring Bills</h3>
            <CardNavigationButton name={"See Details"} target="/bills" />
          </div>
          <div style={{ borderColor: "#277C78" }} className={styles.cardsFlex}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Paid Bills</div>
              <div className={styles.cardAmount}>$190.00</div>
            </div>
            <div style={{ borderColor: "#F2CDAC" }} className={styles.card}>
              <div className={styles.cardTitle}>Total Upcoming</div>
              <div className={styles.cardAmount}>$194.98</div>
            </div>
            <div style={{ borderColor: "#82C9D7" }} className={styles.card}>
              <div className={styles.cardTitle}>Due Soon</div>
              <div className={styles.cardAmount}>$59.98</div>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default OverviewRecurringBillsWrapper;
