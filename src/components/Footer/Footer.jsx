import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="footer__logo">
        <Link to={ROUTES.HOME}>
          footerLogo
        </Link>
      </div>
      <div className="footer__copyrights">
        copyrights
      </div>
      <div className={styles.socials}>
        <a
          href="#!"
          target="_blank"
          rel="noreferrer"
        >VK</a>
        <a
          href="#!"
          target="_blank"
          rel="noreferrer"
        >telegram</a>
      </div>
    </footer>
  );
}

export default Footer;