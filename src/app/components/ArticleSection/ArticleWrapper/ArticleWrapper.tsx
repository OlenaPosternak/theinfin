import React, { ReactNode } from "react";
import styles from "./ArticleWrapper.module.scss";

interface ArticleProps {
  children: ReactNode;
  number: string;
  bgColor?: string;
  name: string;
  numberPosition?: string;
  numberColor?: string;
}

export const ArticleWrapper = ({
  children,
  bgColor,
  number,
  name,
  numberPosition,
  numberColor,
}: ArticleProps) => {
  return (
    <article className={styles.article} style={{ backgroundColor: bgColor }}>
      <span
        className={styles.number}
        style={{ left: numberPosition, color: numberColor }}
      >
        {number}
      </span>
      <p className={styles.name}>{name}</p>
      {children}
    </article>
  );
};
