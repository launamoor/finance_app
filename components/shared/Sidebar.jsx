"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles/Sidebar.module.css";
import logoLarge from "@/public/images/logo-large.svg";
import logoSmall from "@/public/images/logo-small.svg";
import NavOverviewIcon from "./IconComponents/NavOverviewIcon";
import NavTransactionsIcon from "./IconComponents/NavTransactionsIcon";
import NavBudgetsIcon from "./IconComponents/NavBudgetsIcon";
import NavPotsIcon from "./IconComponents/NavPotsIcon";
import NavReccuringBillsIcon from "./IconComponents/NavReccuringBillsIcon";
import MinimizeButtonIcon from "./IconComponents/MinimizeButtonIcon";
import { useRouter, usePathname } from "next/navigation";

import { useState } from "react";
import { useNavigationContext } from "@/contexts/navigationContext";

const Sidebar = () => {
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const { activeTab, setActiveTab } = useNavigationContext();

  const handleTabChange = (e) => {
    const target = e.currentTarget.id;
    const path = target === "overview" ? "/" : `/${target}`;
    setActiveTab(target);

    router.push(path);
  };

  const isActive = (tab) => {
    return tab === "overview" ? pathname === "/" : pathname === `${tab}`;
  };

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  return (
    <aside
      className={
        sidebarHidden
          ? styles.sidebarOuterWrapperHidden
          : styles.sidebarOuterWrapper
      }
    >
      <div className={styles.sidebarInnerWrapper}>
        <div className={styles.sidebarHeader}>
          <Image
            className={styles.logo}
            src={sidebarHidden ? logoSmall : logoLarge}
            alt="finance logo"
          />
        </div>
        <nav className={styles.sidebarNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <button
                id="overview"
                onClick={handleTabChange}
                className={
                  isActive("overview")
                    ? styles.navButtonActive
                    : styles.navButton
                }
              >
                <NavOverviewIcon />
                <p className={sidebarHidden ? styles.hidden : styles.reveal}>
                  Overview
                </p>
              </button>
            </li>
            <li className={styles.navItem}>
              <button
                id="transactions"
                onClick={handleTabChange}
                className={
                  isActive("/transactions")
                    ? styles.navButtonActive
                    : styles.navButton
                }
              >
                <NavTransactionsIcon />
                <p className={sidebarHidden ? styles.hidden : styles.reveal}>
                  Transactions
                </p>
              </button>
            </li>
            <li className={styles.navItem}>
              <button
                id="budgets"
                onClick={handleTabChange}
                className={
                  isActive("/budgets")
                    ? styles.navButtonActive
                    : styles.navButton
                }
              >
                <NavBudgetsIcon />
                <p className={sidebarHidden ? styles.hidden : styles.reveal}>
                  Budgets
                </p>
              </button>
            </li>
            <li className={styles.navItem}>
              <button
                id="pots"
                onClick={handleTabChange}
                className={
                  isActive("/pots") ? styles.navButtonActive : styles.navButton
                }
              >
                <NavPotsIcon />
                <p className={sidebarHidden ? styles.hidden : styles.reveal}>
                  Pots
                </p>
              </button>
            </li>
            <li className={styles.navItem}>
              <button
                id="bills"
                onClick={handleTabChange}
                className={
                  isActive("/bills") ? styles.navButtonActive : styles.navButton
                }
              >
                <NavReccuringBillsIcon />
                <p className={sidebarHidden ? styles.hidden : styles.reveal}>
                  Recurring Bills
                </p>
              </button>
            </li>
          </ul>
        </nav>
        <button
          onClick={toggleSidebar}
          className={
            sidebarHidden
              ? styles.sidebarMinimizeButtonHidden
              : styles.sidebarMinimizeButton
          }
        >
          <div className={styles.minimizeButtonContent}>
            <MinimizeButtonIcon />
            <p className={sidebarHidden ? styles.hidden : styles.reveal}>
              Minimize Menu
            </p>
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
