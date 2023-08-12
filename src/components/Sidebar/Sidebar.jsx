import styles from "./Sidebar.module.css";
import allImg from "../../imgs/all.png";
import fantasyImg from "../../imgs/fantasy.png";
import romanceImg from "../../imgs/romance.png";
import fairyTaleImg from "../../imgs/fairy-tale.png";
import horrorImg from "../../imgs/horror.png";
import detectiveImg from "../../imgs/detective.png";
import { useGetCategoriesQuery } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';

const Sidebar = ({ setGenreForFilter, setCurrentPage }) => {
  const { data = [] } = useGetCategoriesQuery();
  const list = data;
  const navigate = useNavigate();

  const iconList = [
    allImg, fantasyImg, romanceImg, fairyTaleImg, horrorImg, detectiveImg
  ]

  const handleSetCat = (title) => {
    setGenreForFilter(title);
    setCurrentPage(1);
    navigate('/');
  }

  return (
    <section className="sidebar">
      <div className="sidebar__title">CATEGORIES</div>
      <nav>
        <ul className={styles.listItemsCat}>
          {list.map(({ id, title }) => (
            <li className={styles.itemCat} key={id} onClick={() => handleSetCat(title)}>
              <img className={styles.img} src={iconList[id - 1]} alt={title} /><Badge bg="secondary">{title}</Badge>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar__footer">
      </div>
    </section>
  );
}

export default Sidebar;