import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addItemToCart, toggleFavorites, remItemFromCart, remItemAllFromCart, addFullIPrice } from "../../features/user/userSlice";
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Product = (item) => {
  const cartData = useSelector(state => state.user.cart);
  const product = item[0];
  const dispatch = useDispatch();
  let [addedItems, setAddedItems] = useState(0);

  const addToCart = () => {
    setAddedItems(addedItems + 1);
    dispatch(addItemToCart(product));
    countIPricePlus(product.id, product.price);
  }

  const countIPricePlus = (id, price) => {
    let found = cartData.find(n => n.id === id);
    let iCount;
    if (found === undefined) iCount = 1;
    else iCount = found.quantity + 1;

    const fullIPrice = price * iCount;
    dispatch(addFullIPrice({ fullIPrice, id }));
  }

  const removeItemFromCart = () => {
    setAddedItems(addedItems - 1);
    dispatch(remItemFromCart(product));
    countIPriceMinus(product.id, product.price);
  }

  const countIPriceMinus = (id, price) => {
    let found = cartData.find(n => n.id === id);
    let iCount;
    if (found === undefined) iCount = 0;
    else iCount = found.quantity - 1;

    const fullIPrice = price * iCount;
    dispatch(addFullIPrice({ fullIPrice, id }));
  }

  const removeItemAllFromCart = () => {
    setAddedItems(addedItems = 0);
    dispatch(remItemAllFromCart(product));
  }

  const toggleFav = () => {
    dispatch(toggleFavorites(product));
  }

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      {!product
        ? <h2>Loading</h2>
        : <div className={styles.product}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={`${product.image}`} alt="Product image" />
          </div>
          <div className={styles.info}>
            <h2 className="product__title">Title: {product.title}</h2>
            <h5 className="product__price">Price: {product.price}$</h5>
          </div>
          <Alert variant="info" className="product__description">
            {product.description}
          </Alert>
          <div className={styles.btnsWrapper}>
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="me-2" aria-label="First group">
                {addedItems
                  ? <Button onClick={removeItemFromCart}>-</Button>
                  : ''}
                <Button onClick={addToCart}>+</Button>
              </ButtonGroup>
              <ButtonGroup aria-label="Second group">
                {addedItems
                  ?
                  <OverlayTrigger
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                      <Tooltip>
                        Delete all this books from the cart
                      </Tooltip>
                    }
                  >
                    <Button onClick={removeItemAllFromCart}>x</Button>
                  </OverlayTrigger>
                  : ''}
              </ButtonGroup>
            </ButtonToolbar>
            <Button onClick={toggleFav} variant="primary">Add to favourites</Button>
          </div>
          {addedItems
            ?
            <p className={styles.addedItemsCountText}>You added {addedItems} this {addedItems === 1 ? 'book' : 'books'} it the cart</p>
            : ''}
          <div className={styles.linkToMainWrapper}>
            <Link onClick={handleLinkClick} className={styles.linkToMain} to={ROUTES.HOME}>Back to Main</Link>
          </div>
        </div>}
    </>
  );
}

export default Product;