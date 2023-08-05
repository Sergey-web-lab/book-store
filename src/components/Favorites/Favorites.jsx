import styles from "./Favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Favorites = () => {
  const favData = useSelector(state => state.user.favorites);
  const dispatch = useDispatch();

  const remFav = (index) => {
    dispatch(toggleFavorites(favData[index]));
  }

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {favData.length === 0
        ? <>
          <h2>Favorites list is empty</h2>
          <Link to={ROUTES.HOME}><h1>Back to main</h1></Link>
        </>
        : ''}

      {favData.map(({ id, title, image, price }, index) => (
        <div key={id} className={styles.list}>
          <h2>{title}</h2>
          <img src={image} alt="Product image" />
          <p>Price: {price}</p>
          <button onClick={() => remFav(index)} className="favorites__list_btn">x</button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;