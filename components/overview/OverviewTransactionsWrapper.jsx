"use client";
import React from "react";
import styles from "./styles/OverviewTransactionsWrapper.module.css";
import CardWrapper from "../shared/CardWrapper";
import CardNavigationButton from "../shared/CardNavigationButton";
import Image from "next/image";
import { useDataContext } from "@/contexts/dataContext";
import Divider from "./Divider";

// TODO: Button navigation is not working

const OverviewTransactionsWrapper = () => {
  const dateFormatter = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const day = newDate.getDate();

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${day} ${months[month]} ${year}`;
  };

  const { data } = useDataContext();
  const transactions = data?.transactions?.slice(0, 5);
  return (
    <CardWrapper className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.titleFlex}>
          <h3 className={styles.transactionsTitle}>Transactions</h3>
          <CardNavigationButton name="View All" target="/transactions" />
        </div>
        <div className={styles.transactionsFlex}>
          {transactions?.map((transaction, i) => {
            return (
              <div key={i}>
                <div className={styles.singleTransactionFlex}>
                  <div className={styles.avatarFlex}>
                    <Image
                      src={transaction.avatar}
                      alt={`Avatar of ${transaction.name}`}
                      className={styles.avatar}
                      width={40}
                      height={40}
                    />
                    <p className={styles.name}>{transaction.name}</p>
                  </div>
                  <div className={styles.amountFlex}>
                    <div
                      className={
                        transaction.amount > 0
                          ? styles.positiveAmount
                          : styles.negativeAmount
                      }
                    >
                      {transaction.amount > 0 ? "+" : "-"}
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "USD",
                      }).format(Math.abs(transaction.amount))}
                    </div>
                    <div className={styles.date}>
                      {dateFormatter(transaction.date)}
                    </div>
                  </div>
                </div>
                {i < transactions.length - 1 ? <Divider /> : null}
              </div>
            );
          })}
        </div>
      </div>
    </CardWrapper>
  );
};

export default OverviewTransactionsWrapper;
