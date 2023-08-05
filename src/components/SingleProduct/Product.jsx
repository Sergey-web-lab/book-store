import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/user/userSlice";

const Product = (item) => {
  const product = item[0];
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItemToCart(product));
  }

  return (
    <>
      {!product
        ? <h2>Loading</h2>
        : <div className="product">
          <div className="product__imgs">
            <img className="product__img" src={`${product.image}`} alt="Product image" />
          </div>
          <div className="product__info">
            <div className="product__title">Title: {product.title}</div>
            <div className="product__price">Price: {product.price}$</div>
          </div>
          <p className="product__description">
            {product.description}
          </p>
          <div className="product__actions">
            <button onClick={addToCart}>Add to cart</button>
            <button>Add to favourites</button>
          </div>
          <div className="product__bottom">
            <Link to={ROUTES.HOME}>Return to store</Link>
          </div>
        </div>}
    </>
  );
}

export default Product;