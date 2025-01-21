'use client'
import React from 'react'
import Image from 'next/image'
import styles from './styles/Sidebar.module.css'
import logoLarge from '@/public/images/logo-large.svg';
import NavOverviewIcon from './IconComponents/NavOverviewIcon';
import transactionsIcon from '@/public/images/icon-nav-transactions.svg';
import budgetsIcon from '@/public/images/icon-nav-budgets.svg';
import potsIcon from '@/public/images/icon-nav-pots.svg';
import recurringBillsIcon from '@/public/images/icon-nav-recurring-bills.svg';


const Sidebar = () => {

  return (
    <aside className={styles.sidebarOuterWrapper}>
        <div className={styles.sidebarInnerWrapper}>
            <div className={styles.sidebarHeader}>
                <Image src={logoLarge} alt="finance logo" />
            </div>
            <nav className={styles.sidebarNav}>
                <ul className={styles.navList}>
                    <li id='overview' className={styles.navItem}>
                        <NavOverviewIcon fill={'#277C78'} />
                        <p>Overview</p>
                    </li>
                    <li className={styles.navItem}><Image src={transactionsIcon} alt='transactions icon'/>
                    <p>Transactions</p></li>
                    <li className={styles.navItem}>
                    <Image src={budgetsIcon} alt='budgets icon'/>
                    <p>Budgets</p>
                    </li>
                    <li className={styles.navItem}>
                    <Image src={potsIcon} alt='pots icon'/>
                    <p>Pots</p>
                    </li>
                    <li className={styles.navItem}>
                    <Image src={recurringBillsIcon} alt='recurring bills icon'/>
                    <p>Recurring Bills</p>
                    </li>
                </ul>
            </nav>
            <button className={styles.sidebarMinimizeButton}>Button</button>
        </div>
    </aside>
  )
}

export default Sidebar