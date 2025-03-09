import React from "react";
import styles from "./styles/CardNavigationButton.module.css";
import IconCaretRight from "./IconComponents/IconCaretRight";

const CardNavigationButton = ({ target, name }) => {
  return (
    <a href={target} className={styles.detailsButton}>
      <p>{name}</p>
      <IconCaretRight className={styles.detailsButtonIcon} />
    </a>
  );
};

export default CardNavigationButton;
