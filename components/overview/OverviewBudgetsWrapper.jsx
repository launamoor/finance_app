import React, { useEffect, useState } from "react";
import styles from "./styles/OverviewBudgetsWrapper.module.css";
import CardWrapper from "../shared/CardWrapper";
import CardNavigationButton from "../shared/CardNavigationButton";
import { useDataContext } from "@/contexts/dataContext";
import CircleGraph from "./CircleGraph";

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
      setPercentages(percentages);
    }
  }, [data]);

  if (!data || !percentages) return null;

  return (
    <CardWrapper>
      <div className={styles.innerWrapper}>
        <div className={styles.titleFlex}>
          <h3 className={styles.title}>Budgets</h3>
          <CardNavigationButton name="See Details" target="/" />
        </div>
        <div className={styles.graphFlex}>
          <CircleGraph percentages={percentages} budgetsData={data.budgets} />
          <div className={styles.budgetWrapper}>
            {data.budgets?.map((budget) => (
              <div
                style={{ "--budget-theme": budget.theme }}
                key={budget.category}
                className={styles.budgetFlex}
              >
                <div className={styles.budgetTitle}>{budget.category}</div>
                <div className={styles.budgetAmount}>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(budget.maximum)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default OverviewBudgetsWrapper;
