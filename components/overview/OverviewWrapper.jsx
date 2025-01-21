import React from 'react'
import styles from './styles/OverviewWrapper.module.css'

const OverviewWrapper = ({children}) => {
  return (
    <div className={styles.wrapper}>{children}</div>
  )
}

export default OverviewWrapper