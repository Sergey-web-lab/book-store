import styles from "./Info.module.css";
import infoImg from "../../imgs/info.png";
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Info = () => {
  return (
    <div className="info">
      <div className={styles.titleWrapper}>
        <h1>Info</h1>
        <img className={styles.img} src={infoImg} alt="info" />
      </div>
      <Alert className={styles.info} variant="info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem laudantium quas soluta voluptatem aperiam quae, expedita impedit illo quo, eos ab blanditiis perferendis fugiat optio atque itaque culpa ducimus consectetur ratione nulla? Eaque ratione consectetur quod.
        </p>
      </Alert>
      <div className={styles.linkToMainWrapper}>
        <Link className={styles.linkToMain} to={ROUTES.HOMEGHPAGES}>Back to Main</Link>
      </div>
    </div>
  );
}

export default Info;