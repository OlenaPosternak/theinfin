import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import { NavBarLinks } from "./NavBarLinks/NavBarLinks";
import { Button } from "../../general/Button";

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image
          src="images/logo.svg"
          width={514.84}
          height={90}
          alt="The INFIN logo"
        />
      </Link>

      <NavBarLinks />
      <Button bgColor="" textColor="#121212">
        contact
      </Button>
    </nav>
  );
};
