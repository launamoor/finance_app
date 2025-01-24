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
        <main>
          <OverviewWrapper />
        </main>
      );
    case "transactions":
      return (
        <main>
          <TransactionsWrapper />
        </main>
      );
    case "budgets":
      return (
        <main>
          <BudgetsWrapper />
        </main>
      );
    case "pots":
      return (
        <main>
          <PotsWrapper />
        </main>
      );
    case "bills":
      return (
        <main>
          <BillsWrapper />
        </main>
      );
    default:
      return (
        <main>
          <OverviewWrapper />
        </main>
      );
  }
};

export default MainActivity;
