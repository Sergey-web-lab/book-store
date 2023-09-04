import styles from "./Sidebar.module.css";
import allImg from "../../imgs/all.png";
import fantasyImg from "../../imgs/fantasy.png";
import romanceImg from "../../imgs/romance.png";
import fairyTaleImg from "../../imgs/fairy-tale.png";
import horrorImg from "../../imgs/horror.png";
import detectiveImg from "../../imgs/detective.png";
import { FC } from "react";
import { useGetCategoriesQuery } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import AccordionC from "./AccordionC";
import SidebarItem from "./SidebarItem";
import { ROUTES } from "../../utils/routes";

type SidebarProps = {
  setGenreForFilter: (arg: string) => void
  setCurrentPage: (arg: number) => void
}

const Sidebar: FC<SidebarProps> = ({ setGenreForFilter, setCurrentPage }) => {
  const { data = [] } = useGetCategoriesQuery(null);
  const list: [] = data;
  const navigate = useNavigate();

  const iconList = [
    allImg, fantasyImg, romanceImg, fairyTaleImg, horrorImg, detectiveImg
  ]

  const handleSetCat = (title: string, index: number) => {
    setGenreForFilter(title);
    setCurrentPage(1);
    navigate(`${ROUTES.HOMEGHPAGES}`);
    const catBtns = document.querySelectorAll('.sidebarItem__itemCat');
    catBtns.forEach((item) => {
      item.classList.remove('sidebarItem__active');
    })
    catBtns[index].classList.add('sidebarItem__active');
  }

  return (
    <section className="sidebar">
      <div className={styles.categoriesWrapper}>
        <div className="sidebar__title">CATEGORIES</div>
        <nav>
          <ul className={styles.listItemsCat}>
            {list.map((obj, index) =>
              <SidebarItem key={index} iconList={iconList} obj={obj} handleSetCat={handleSetCat} index={index} />
            )}
          </ul>
        </nav>
      </div>
      <AccordionC
        list={list}
        setGenreForFilter={setGenreForFilter}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}

export default Sidebar;