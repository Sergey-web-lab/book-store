import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch } from "react-redux";
import { setSearchInputVal, toggleForm } from "../../features/user/userSlice";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { useSelector } from "react-redux";
import DarkMode from "../DarkMode/DarkMode";
import Form from 'react-bootstrap/Form';

const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user.currentUser);
  const favList = useSelector(state => state.user.favorites);
  const cartList = useSelector(state => state.user.cart);
  const inputVal = useSelector(state => state.user.searchInputVal);
  const { isAuth } = useCheckAuth();

  let fullAmount = 0;
  cartList.forEach((item) => {
    fullAmount += item.quantity;
  })

  let price = 0;
  cartList.forEach((item) => {
    price += item.fullIPrice;
  })

  const inputHandler = (e) => {
    dispatch(setSearchInputVal(e.target.value));
  }

  return (
    <header className={styles.header}>
      <div className="header__mainLink">
        <Link to={ROUTES.HOME}>
          <h1>Main</h1>
        </Link>
      </div>
      <div className={styles.info}>
        <Link to={isAuth ? `${ROUTES.ISAUTHPAGE}` : `${ROUTES.LOGIN}`} className="header__info_user">
          {Object.keys(userInfo).length === 0
            ? 'User'
            : `User: ${userInfo.email}`
          }
        </Link>
        <div className="header__info_input">
          <Form.Control
            type="search"
            placeholder="Search books in Main..."
            autoComplete="off"
            onChange={e => inputHandler(e)}
            value={inputVal}
          />
        </div>
        <div className="header__info_linkToInfo">
          <DarkMode />
        </div>
        <div className="header__info_linkToInfo">
          <Link to={ROUTES.INFO}>Info</Link>
        </div>
        <div className="header__info_linkToFavorites">
          <Link to={ROUTES.FAVORITES}>Favorites</Link>
          {favList.length === 0
            ? ''
            : <div className="header__info_favoritesAmount">All: {favList.length}</div>}
        </div>
        <div className="header__info_linkToCart">
          <Link to={ROUTES.CART}>Cart</Link>
          {cartList.length === 0
            ? ''
            : (<>
              <div className="cartAmount">All items: {fullAmount}</div>
              <div className="cartAmount">All price: {price}$</div>
            </>)}
        </div>
      </div>
    </header>
  );
}

export default Header;