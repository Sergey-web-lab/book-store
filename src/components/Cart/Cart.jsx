import styles from "./Cart.module.css";
import cartImg from "../../imgs/cart.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { addFullIPrice, addItemToCart, remItemAllFromCart, remItemFromCart } from "../../features/user/userSlice";
import { ROUTES } from "../../utils/routes";
import Alert from 'react-bootstrap/Alert';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


const Cart = () => {
  const cartData = useSelector(state => state.user.cart);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.user.cart);

  const addToCart = (index, id, price) => {
    dispatch(addItemToCart(products[index]));
    countIPricePlus(index, id, price);
  }

  const removeItemFromCart = (index, id, price) => {
    dispatch(remItemFromCart(products[index]));
    countIPriceMinus(index, id, price);
  }

  const removeItemAllFromCart = (index) => {
    dispatch(remItemAllFromCart(products[index]));
  }

  const countIPricePlus = (index, id, price) => {
    let found = cartData.find(n => n.id === id);
    let iCount;
    if (found === undefined) iCount = 1;
    else iCount = found.quantity + 1;

    const fullIPrice = price * iCount;
    dispatch(addFullIPrice({ fullIPrice, id }));
  }

  const countIPriceMinus = (index, id, price) => {
    let found = cartData.find(n => n.id === id);
    let iCount;
    if (found === undefined) iCount = 0;
    else iCount = found.quantity - 1;

    const fullIPrice = price * iCount;
    dispatch(addFullIPrice({ fullIPrice, id }));
  }

  return (
    <div className={styles.cart}>
      <div className={styles.titleWrapper}>
        <h1>Cart</h1>
        <img className={styles.img} src={cartImg} alt="cart" />
      </div>
      {products.length == 0
        ?
        <>
          <Alert className={styles.alert} variant="info">
            <Alert.Heading>Cart is empty</Alert.Heading>
          </Alert>
          <div className={styles.linkToMainWrapper}>
            <Link className={styles.linkToMain} to={ROUTES.HOME}>Back to Main</Link>
          </div>
        </>
        :
        products.map(({ id, title, image, price, quantity, fullIPrice }, index) => (
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
              <p>Quantity: {quantity}</p>
              <p>Full item cost: {fullIPrice} $</p>
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                  <Button onClick={() => removeItemFromCart(index, id, price)}>-</Button>
                  <Button onClick={() => addToCart(index, id, price)}>+</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Second group">
                  <Button onClick={() => removeItemAllFromCart(index)}>x</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Figure.Caption>
          </Figure>
        ))
      }
      {products.length != 0
        && <Link className={styles.linkToForm} to={ROUTES.ORDERFORM}>Make an order</Link>}
    </div>
  );
}

export default Cart;