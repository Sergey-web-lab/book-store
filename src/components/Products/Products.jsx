import styles from "./Products.module.css";
import { Link } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import { ROUTES } from "../../utils/routes";
import { addItemToCart, remItemFromCart, toggleFavorites, addFullIPrice } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = ({ title, style = {}, products = [], postsPerPage, setPostsPerPage, localPostsShowQty }) => {
  const dispatch = useDispatch();
  const inputVal = useSelector(state => state.user.searchInputVal);
  const cartData = useSelector(state => state.user.cart);
  const favData = useSelector(state => state.user.favorites);

  const addToCart = (index, id, price) => {
    dispatch(addItemToCart(products[index]));
    countIPricePlus(id, price);
  }

  const removeItemFromCart = (index, id, price) => {
    dispatch(remItemFromCart(products[index]));
    countIPriceMinus(id, price);
  }

  const countIPricePlus = (id, price) => {
    let found = cartData.find(n => n.id === id);
    let iCount;
    if (found === undefined) iCount = 1;
    else iCount = found.quantity + 1;

    const fullIPrice = price * iCount;
    dispatch(addFullIPrice({ fullIPrice, id }));
  }

  const countIPriceMinus = (id, price) => {
    let found = cartData.find(n => n.id === id);
    let iCount;
    if (found === undefined) iCount = 0;
    else iCount = found.quantity - 1;

    const fullIPrice = price * iCount;
    dispatch(addFullIPrice({ fullIPrice, id }));
  }

  const toggleFav = (index) => {
    dispatch(toggleFavorites(products[index]));
  }

  const toggleQtyIToShow = (e) => {
    setPostsPerPage(e.target.value);
    localStorage.setItem('postsPerPage', e.target.value);
  }

  return (
    <section className="products" style={style}>
      {title && <h2>{title}</h2>}
      <div className="products__countShowItems">
        <span>Show </span>
        <select
          defaultValue={localPostsShowQty}
          value={postsPerPage}
          onChange={e => toggleQtyIToShow(e)}
        >
          <option value="4">4 items each</option>
          <option value="8">8 items each</option>
        </select>
      </div>
      <div className={styles.products}>
        {products.filter(obj => {
          if (obj.title.toLowerCase().includes(inputVal.toLowerCase())) {
            return true;
          }
          return false;
        }).map(({ id, image, title, author, genre, price }, index) => (
          <Card className={styles.card} key={id}>
            <Card.Img variant="top" src={`${image}`} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <div className="products__product_info">
                <div className="products__product_info_price">Price now: {price}$</div>
                <div className="products__product_info_oldPrice">Price before: {Math.floor(price * 1.8)}$</div>
                <div className="products__product_info_price">Author: {author}</div>
                <div className="products__product_info_price">Genre: {genre}</div>
                <div className="products__product_info_itemsCount">
                  Items in the cart:
                  {cartData.find(n => n.id === id) === undefined
                    ? '0'
                    : cartData.find(n => n.id === id).quantity}
                </div>
                {cartData.find(n => n.id === id) === undefined || cartData.find(n => n.id === id).quantity === 0
                  ? ''
                  : <p>Full cost: {cartData.find(n => n.id === id).fullIPrice} $</p>}
              </div>
              <div className={styles.mainBtnsWrapper}>
                <Link className="products__product_link" to={`/items/${id}`}>
                  <Button to={ROUTES.PRODUCT} variant="primary">Info</Button>
                </Link>
                <Button onClick={() => toggleFav(index)} variant="primary">
                  {favData.find(n => n.id === id) === undefined
                    ? 'Add to favorites'
                    : 'Del from favorites'}
                </Button>
              </div>
              <div className={styles.changeCountBtnsWrapper}>
                <Button onClick={() => addToCart(index, id, price)} variant="primary">+</Button>
                {cartData.find(n => n.id === id) === undefined || cartData.find(n => n.id === id).quantity === 0
                  ? ''
                  : <Button onClick={() => removeItemFromCart(index, id, price)} variant="primary">-</Button>}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Products;

