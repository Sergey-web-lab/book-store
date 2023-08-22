import styles from "./Header.module.css";
import homeImg from "../../imgs/home.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { setSearchInputVal } from "../../features/user/userSlice";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import DarkMode from "../DarkMode/DarkMode";
import Form from 'react-bootstrap/Form';
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reactReduxHooks";

type UserInfo = {
  email?: string
}

const Header = () => {
  const dispatch = useAppDispatch();
  const userInfo: UserInfo = useAppSelector(state => state.user.currentUser);
  const favList = useAppSelector(state => state.user.favorites);
  const cartList = useAppSelector(state => state.user.cart);
  const inputVal = useAppSelector(state => state.user.searchInputVal);
  const { isAuth } = useCheckAuth();

  let fullAmount = 0;
  cartList.forEach((item: { quantity: number; }) => {
    fullAmount += item.quantity;
  })

  let price = 0;
  cartList.forEach((item: { fullIPrice: number; }) => {
    price += item.fullIPrice;
  })

  const inputHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(setSearchInputVal(e.target.value));
  }

  return (
    <header className={styles.header}>
      <div className="header__mainLink">
        <Link className={styles.mainLinkWrapper} to={ROUTES.HOME}>
          <img className={styles.img} src={homeImg} alt="Main page" />
          <h1 className={styles.mainTitle}>Main</h1>
        </Link>
      </div>
      <div className={styles.info}>
        <div className="userLinkWrapper">
          <Link to={isAuth ? `${ROUTES.ISAUTHPAGE}` : `${ROUTES.LOGIN}`} className="header__info_user">
            {Object.keys(userInfo).length === 0
              ? 'User'
              : `User: ${userInfo.email}`
            }
          </Link>
        </div>
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