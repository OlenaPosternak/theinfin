import { FooterLinkColumn } from "../FooterLinkColumn/FooterLinkColumn";
import {
  landingLinks,
  links,
  socialMedia,
  contacts,
} from "./FooterLinksData.js";
import styles from "./FooterLinks.module.scss";

export const FooterLinks = () => {
  return (
    <div className={styles.wrapper}>
      <FooterLinkColumn linksInfo={landingLinks}>Pages</FooterLinkColumn>
      <FooterLinkColumn linksInfo={links}> For Business</FooterLinkColumn>
      <FooterLinkColumn linksInfo={links}> For Individuals </FooterLinkColumn>
      <FooterLinkColumn linksInfo={contacts} isExternal>
        Contacts
      </FooterLinkColumn>
      <FooterLinkColumn linksInfo={socialMedia} isExternal>
        Social Media
      </FooterLinkColumn>
    </div>
  );
};
