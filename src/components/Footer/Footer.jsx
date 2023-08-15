import styles from "./Footer.module.css";
import upImg from "../../imgs/up.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Footer = () => {
  const goToUp = () => {
    window.scrollTo(0, 0);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a
          href="https://vk.com/id10175513"
          target="_blank"
          rel="noreferrer"
        >My VK</a>
        <a
          href="https://t.me/LSergio1994"
          target="_blank"
          rel="noreferrer"
        >My telegram</a>
      </div>
      <button onClick={goToUp} className={styles.goToUp}>Go to up</button>
    </footer>
  );
}

export default Footer;