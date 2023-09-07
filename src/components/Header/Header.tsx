import styles from "./Header.module.css";
import homeImg from "../../imgs/home.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { setSearchInputVal } from "../../features/user/userSlice";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reactReduxHooks";
import DarkMode from "../DarkMode/DarkMode";
import Form from 'react-bootstrap/Form';
import OffcanvasC from "../Offcanvas/OffcanvasC";

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
  const navigate = useNavigate();
  const location = useLocation();

  let fullAmount = 0;
  cartList.forEach((item) => {
    if (item.quantity) {
      fullAmount += item.quantity;
    }
  })

  let price = 0;
  cartList.forEach((item) => {
    if (item.fullIPrice) {
      price += item.fullIPrice;
    }
  })

  const inputHandlerClick = () => {
    if (location.pathname !== `${ROUTES.HOMEGHPAGES}`) {
      let goToMain = window.confirm('Go to the main page to search for books?');
      if (goToMain) {
        navigate(`${ROUTES.HOMEGHPAGES}`);
      }
    }
  }

  const inputHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(setSearchInputVal(e.target.value));
  }

  return (
    <header className={styles.header}>
      <div className="header__mainLink">
        <Link className={styles.mainLinkWrapper} to={ROUTES.HOMEGHPAGES}>
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
            onClick={inputHandlerClick}
            onChange={e => inputHandler(e)}
            value={inputVal}
          />
        </div>
        <div className="header__info_linkToInfo">
          <DarkMode />
        </div>
        <div className={styles.mobileHidden}>
          <Link to={ROUTES.INFO}>Info</Link>
        </div>
        <div className={styles.mobileHidden}>
          <Link to={ROUTES.FAVORITES}>Favorites</Link>
          {favList.length === 0
            ? ''
            : <div className="header__info_favoritesAmount">All: {favList.length}</div>}
        </div>
        <div className={styles.mobileHidden}>
          <Link to={ROUTES.CART}>Cart</Link>
          {cartList.length === 0
            ? ''
            : (<>
              <div className="cartAmount">All items: {fullAmount}</div>
              <div className="cartAmount">All price: {price}$</div>
            </>)}
        </div>
      </div>
      <div className={styles.menu}>
        <OffcanvasC />
      </div>
    </header>
  );
}

export default Header;