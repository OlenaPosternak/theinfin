import Link from "next/link";
import { ReactNode } from "react";
import styles from "./FooterLinkColumn.module.scss";

interface LinksProps {
  linksInfo: { name: string; linkTo: string }[];
  children: ReactNode;
  isExternal?: boolean;
}
export const FooterLinkColumn = ({
  linksInfo,
  children,
  isExternal = false,
}: LinksProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{children}</p>
      <ul className={styles.list}>
        {linksInfo.map((info, index) => {
          return (
            <li key={index}>
              {isExternal ? (
                <a
                  href={info.linkTo}
                  no-referrer
                  target="_blank"
                  className={styles.link}
                >
                  {info.name}
                </a>
              ) : (
                <Link href={info.linkTo} className={styles.link}>
                  {info.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
