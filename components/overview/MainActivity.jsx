"use client";
import React from "react";
import OverviewWrapper from "./OverviewWrapper";
import TransactionsWrapper from "../transactions/TransactionsWrapper";
import BudgetsWrapper from "../budgets/BudgetsWrapper";
import PotsWrapper from "../pots/PotsWrapper";
import BillsWrapper from "../bills/BillsWrapper";
import { useNavigationContext } from "@/contexts/navigationContext";

const MainActivity = () => {
  const { activeTab } = useNavigationContext();

  switch (activeTab) {
    case "overview":
      return (
        <main style={{ width: "100%" }}>
          <OverviewWrapper />
        </main>
      );
    case "transactions":
      return (
        <main style={{ width: "100%" }}>
          <TransactionsWrapper />
        </main>
      );
    case "budgets":
      return (
        <main style={{ width: "100%" }}>
          <BudgetsWrapper />
        </main>
      );
    case "pots":
      return (
        <main style={{ width: "100%" }}>
          <PotsWrapper />
        </main>
      );
    case "bills":
      return (
        <main style={{ width: "100%" }}>
          <BillsWrapper />
        </main>
      );
    default:
      return (
        <main style={{ width: "100%" }}>
          <OverviewWrapper />
        </main>
      );
  }
};

export default MainActivity;
