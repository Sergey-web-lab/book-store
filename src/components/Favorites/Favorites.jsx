import styles from "./Favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Alert from 'react-bootstrap/Alert';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

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
          <Alert variant="info">
            <Alert.Heading>Favorites list is empty</Alert.Heading>
            <Link to={ROUTES.HOME}><h1>Back to main</h1></Link>
          </Alert>
        </>
        : ''}

      {favData.map(({ id, title, image, price }, index) => (
        <Figure className={styles.item} key={id}>
          <Figure.Image
            width={171}
            height={180}
            alt={title}
            src={image}
          />
          <Figure.Caption>
            <h5>{title}</h5>
            <p>Price: {price} $</p>
            <Button onClick={() => remFav(index)}>Remove from favorite</Button>
          </Figure.Caption>
        </Figure>
      ))}
    </div>
  );
}

export default Favorites;