import styles from "./AccordionC.module.css";
import allImg from "../../imgs/all.png";
import fantasyImg from "../../imgs/fantasy.png";
import romanceImg from "../../imgs/romance.png";
import fairyTaleImg from "../../imgs/fairy-tale.png";
import horrorImg from "../../imgs/horror.png";
import detectiveImg from "../../imgs/detective.png";
import Accordion from 'react-bootstrap/Accordion';
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { ROUTES } from "../../utils/routes";

type AccordionCProps = {
  list: []
  setGenreForFilter: (arg: string) => void
  setCurrentPage: (arg: number) => void
}

const AccordionC: FC<AccordionCProps> = ({ list, setGenreForFilter, setCurrentPage }) => {
  const iconList = [
    allImg, fantasyImg, romanceImg, fairyTaleImg, horrorImg, detectiveImg
  ]

  const navigate = useNavigate();

  const handleSetCat = (title: string) => {
    setGenreForFilter(title);
    setCurrentPage(1);
    navigate(`${ROUTES.HOMEGHPAGES}`);
  }

  return (
    <Accordion className={styles.accordion}>
      <Accordion.Item eventKey="0">
        <Accordion.Header className={styles.accordionHeader}>CATEGORIES</Accordion.Header>
        <Accordion.Body className={styles.accordionBody}>
          <nav>
            <ul className={styles.listItemsCat}>
              {list.map(({ id, title }) => (
                <li className={styles.itemCat} key={id} onClick={() => handleSetCat(title)}>
                  <img className={styles.img} src={iconList[id - 1]} alt={title} /><Badge bg="secondary">{title}</Badge>
                </li>
              ))}
            </ul>
          </nav>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionC;