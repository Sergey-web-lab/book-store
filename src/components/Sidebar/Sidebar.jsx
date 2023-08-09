import style from "./Sidebar.module.css";
import { useGetCategoriesQuery } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setGenreForFilter, setCurrentPage }) => {
  const { data = [] } = useGetCategoriesQuery();
  const list = data;
  const navigate = useNavigate();

  const handleSetCat = (title) => {
    setGenreForFilter(title);
    setCurrentPage(1);
    navigate('/');
  }

  return (
    <section className="sidebar">
      <div className="sidebar__title">CATEGORIES</div>
      <nav>
        <ul className="sidebar__menu">
          {list.map(({ id, title }) => (
            <li className={style.itemCat} key={id} onClick={() => handleSetCat(title)}>
              {title}
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