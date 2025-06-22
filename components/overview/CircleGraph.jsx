import React from "react";
import styles from "./styles/CircleGraph.module.css";
import LoadingSpinner from "../shared/LoadingSpinner";

const CircleGraph = ({ percentages, budgetsData }) => {
  if (!budgetsData || !percentages) return <LoadingSpinner />;

  const calculateSlices = percentages.reduce(
    (acc, curr, index) => {
      const start = acc.lastStop;
      const end = start + curr;
      const stop = `${budgetsData[index].theme} ${start}% ${end}%`;
      acc.result.push(stop);
      acc.lastStop = end;
      return acc;
    },
    { result: [], lastStop: 0 }
  );

  const slices = `conic-gradient(${calculateSlices.result.join(", ")})`;

  return (
    <div style={{ background: slices }} className={styles.outerWrapper}></div>
  );
};

export default CircleGraph;
