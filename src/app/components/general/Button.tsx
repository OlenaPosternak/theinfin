import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
}
export const Button = ({ children, bgColor, textColor }: ButtonProps) => {
  const buttonStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <button type="button" className={styles.button} style={buttonStyles}>
      {children}
    </button>
  );
};
