import React from "react";
import styles from "./styles/OverviewPotsCard.module.css";
import CardNavigationButton from "../shared/CardNavigationButton";
import IconPot from "../shared/IconComponents/IconPot";
import PotsSummaryCell from "./PotsSummaryCell";
import { useDataContext } from "@/contexts/dataContext";

// TODO: Pull in data from the DataContext and display the pots

const OverviewPotsCard = () => {
  const { data } = useDataContext();
  const potsToDisplay = data?.pots?.slice(0, 4);
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.titleFlex}>
          <h3 className={styles.potsTitle}>Pots</h3>
          <CardNavigationButton name={"See Details"} target="/" />
        </div>
        <div className={styles.contentFlex}>
          <div className={styles.totalOuterWrapper}>
            <div className={styles.totalInnerWrapper}>
              <div>
                <IconPot />
              </div>
              <div className={styles.totalSaved}>
                <p className={styles.totalTitle}>Total Saved</p>
                <p className={styles.totalAmount}>$850</p>
              </div>
            </div>
          </div>
          <div className={styles.summaryGrid}>
            {potsToDisplay?.map((pot, i) => (
              <PotsSummaryCell
                key={i}
                barColor={pot.theme}
                summaryCellTitle={pot.name}
                summaryCellAmount={pot.total.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPotsCard;
