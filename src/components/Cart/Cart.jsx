import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { addFullIPrice, addItemToCart, remItemAllFromCart, remItemFromCart } from "../../features/user/userSlice";
import { ROUTES } from "../../utils/routes";

import styles from "./Cart.module.css";

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
    <div className="cart">
      <h1>Cart</h1>
      {products.length == 0
        ?
        <>
          <h2>Cart is empty</h2>
          <Link to={ROUTES.HOME}><h1>Back to main</h1></Link>
        </>
        :
        products.map(({ id, title, image, price, quantity, fullIPrice }, index) => (
          <div key={id}>
            {quantity <= 0 ? '' : (
              <div key={id} className={styles.item}>
                <h2>{title}</h2>
                <img src={`${image}`} alt="Product image" />
                <p>Price: {price} $</p>
                <p>Quantity: {quantity}</p>
                <p>Full item cost: {fullIPrice} $</p>
                <button onClick={() => removeItemFromCart(index, id, price)}>-</button>
                <button onClick={() => addToCart(index, id, price)}>+</button>
                <button onClick={() => removeItemAllFromCart(index)}>x</button>
              </div>
            )}
          </div>
        ))}
      {products.length != 0
        && <Link to={ROUTES.ORDERFORM}>Make an order</Link>}
    </div>
  );
}

export default Cart;