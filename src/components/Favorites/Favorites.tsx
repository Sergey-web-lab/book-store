import styles from "./Favorites.module.css";
import starImg from "../../imgs/star.png";
import { toggleFavorites } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useAppDispatch, useAppSelector } from "../../hooks/reactReduxHooks";
import Alert from 'react-bootstrap/Alert';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

const Favorites = () => {
  const favData = useAppSelector(state => state.user.favorites);
  const dispatch = useAppDispatch();

  const remFav = (index: number) => {
    dispatch(toggleFavorites(favData[index]));
  }

  return (
    <div className="favorites">
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Favorites</h1>
        <img className={styles.img} src={starImg} alt="star" />
      </div>
      {favData.length === 0
        ? <>
          <Alert className={styles.alert} variant="info">
            <Alert.Heading>Favorites list is empty</Alert.Heading>
          </Alert>
          <div className={styles.linkToMainWrapper}>
            <Link className={styles.linkToMain} to={ROUTES.HOMEGHPAGES}>Back to Main</Link>
          </div>
        </>
        : ''}

      <div className={styles.itemsWrapper}>
        {favData.map(({ id, title, image, price }, index) => (
          <Figure className={styles.item} key={id}>
            <Figure.Image
              alt={title}
              src={image}
            />
            <Figure.Caption>
              <h5>{title}</h5>
              <p>Price: {price} $</p>
              <Button className={styles.itemBtn} onClick={() => remFav(index)}>Remove from favorite</Button>
            </Figure.Caption>
          </Figure>
        ))}
      </div>
    </div>
  );
}

export default Favorites;