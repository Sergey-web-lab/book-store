import { NavLink } from "react-router-dom";
import { useGetCategoriesQuery } from "../../features/api/apiSlice";

const Sidebar = () => {
  const { data = [] } = useGetCategoriesQuery();
  const list = data;

  return (
    <section className="sidebar">
      <div className="sidebar__title">CATEGORIES</div>
      <nav>
        <ul className="sidebar__menu">
          {list.map(({ id, title }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `sidebar__menu_link ${isActive ? 'active' : ''}`}
                to={`/categories/${id}`}
              >
                {title}
              </NavLink>
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