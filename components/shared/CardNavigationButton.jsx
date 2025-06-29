"use client";
import React from "react";
import styles from "./styles/CardNavigationButton.module.css";
import IconCaretRight from "./IconComponents/IconCaretRight";
import { useRouter } from "next/navigation";

const CardNavigationButton = ({ target, name }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(target)}
      className={styles.detailsButton}
    >
      <p>{name}</p>
      <IconCaretRight className={styles.detailsButtonIcon} />
    </button>
  );
};

export default CardNavigationButton;
