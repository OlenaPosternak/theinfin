import styles from "./Button.module.scss";

export const Button = ({ children, bgColor = "", textColor = "" }: any) => {
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
