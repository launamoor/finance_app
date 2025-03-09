import React, { useEffect, useState } from "react";
import styles from "./styles/OverviewBudgetsWrapper.module.css";
import CardWrapper from "../shared/CardWrapper";
import CardNavigationButton from "../shared/CardNavigationButton";
import { useDataContext } from "@/contexts/dataContext";

const OverviewBudgetsWrapper = () => {
  const { data } = useDataContext();
  const [percentages, setPercentages] = useState([]);
  useEffect(() => {
    const budgets = data?.budgets;
    const totalBudget = budgets?.reduce(
      (acc, budget) => acc + budget.maximum,
      0
    );

    const percentageCalculator = (budgets) => {
      const allMaximums = budgets?.map((budget) => {
        return budget.maximum;
      });

      const percentages = allMaximums?.map((maximum) => {
        return (maximum / totalBudget) * 100;
      });

      return percentages;
    };

    if (budgets && totalBudget) {
      const percentages = percentageCalculator(budgets);
      console.log("Calculating percentages", percentages);
      setPercentages(percentages);
    }
  }, [data]);

  useEffect(() => {
    console.log("Updated percentages", percentages);
  }, [percentages]);

  return (
    <CardWrapper>
      <div className={styles.innerWrapper}>
        <div className={styles.titleFlex}>
          <h3 className={styles.title}>Budgets</h3>
          <CardNavigationButton name="See Details" target="/" />
        </div>
        <div
          className={styles.chartContainer}
          style={
            percentages && {
              backgroundImage: `conic-gradient(red 0 ${percentages[0]}%,
              blue ${percentages[0]}% ${percentages[1] + percentages[0]}%,
              green ${percentages[1] + percentages[0]}% ${
                percentages[2] + percentages[1] + percentages[0]
              }%,
              yellow ${
                percentages[2] + percentages[1] + percentages[0]
              }% 100%)`,
            }
          }
        ></div>
      </div>
    </CardWrapper>
  );
};

export default OverviewBudgetsWrapper;
