import styles from "./OffcanvasC.module.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { ROUTES } from "../../utils/routes";
import { useAppSelector } from "../../hooks/reactReduxHooks";

const OffcanvasC = () => {
  const scroll = true;

  const favList = useAppSelector(state => state.user.favorites);
  const cartList = useAppSelector(state => state.user.cart);

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        User menu
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='top' scroll={scroll}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h1>User menu</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.info}>
            <div className="header__info_linkToInfo">
              <Link onClick={handleClose} to={ROUTES.INFO}>Info</Link>
            </div>
            <div className="header__info_linkToFavorites">
              <Link onClick={handleClose} to={ROUTES.FAVORITES}>Favorites</Link>
              {favList.length === 0
                ? ''
                : <div className="header__info_favoritesAmount">All: {favList.length}</div>}
            </div>
            <div className="header__info_linkToCart">
              <Link onClick={handleClose} to={ROUTES.CART}>Cart</Link>
              {cartList.length === 0
                ? ''
                : (<>
                  <div className="cartAmount">All items: {fullAmount}</div>
                  <div className="cartAmount">All price: {price}$</div>
                </>)}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasC;