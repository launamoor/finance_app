import React from "react";
import styles from "./styles/OverviewPotsCard.module.css";
import IconCaretRight from "../shared/IconComponents/IconCaretRight";
import IconPot from "../shared/IconComponents/IconPot";
import PotsSummaryCell from "./PotsSummaryCell";
import { useDataContext } from "@/contexts/dataContext";

const OverviewPotsCard = () => {
  const { data } = useDataContext();
  const potsToDisplay = data?.pots?.slice(0, 4);
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.titleFlex}>
          <h3 className={styles.potsTitle}>Pots</h3>
          <a href="/" className={styles.detailsButton}>
            <p>See Details</p>
            <IconCaretRight className={styles.detailsButtonIcon} />
          </a>
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
            {potsToDisplay?.map((pot) => (
              <PotsSummaryCell
                key={pot.id}
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
