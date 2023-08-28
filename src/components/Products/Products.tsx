import styles from "./Products.module.css";
import { Link } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from "../../hooks/reactReduxHooks";
import { addItemToCart, remItemFromCart, toggleFavorites, addFullIPrice, IProduct } from "../../features/user/userSlice";
import { ChangeEvent, FC } from "react";

type ProductsProps = {
  title: string
  style?: {}
  currentPosts: IProduct[]
  postsPerPage: number
  setPostsPerPage: (arg: number) => void
  localPostsShowQty: number
}

type Founded = {
  quantity?: number
}

const Products: FC<ProductsProps> = ({ title, style = {}, currentPosts = [], postsPerPage, setPostsPerPage, localPostsShowQty }) => {
  const dispatch = useAppDispatch();
  const cartData: IProduct[] = useAppSelector(state => state.user.cart);
  const favData = useAppSelector(state => state.user.favorites);

  const addToCart = (index: number, id: number, price: any) => {
    dispatch(addItemToCart(currentPosts[index]));
    countIPricePlus(id, price);
  }

  const removeItemFromCart = (index: number, id: number, price: any) => {
    dispatch(remItemFromCart(currentPosts[index]));
    countIPriceMinus(id, price);
  }

  const countIPricePlus = (id: number, price: number) => {
    let found = cartData.find((n: { id: number; }) => n.id === id);
    let iCount;
    if (found === undefined) iCount = 1;
    else {
      const founded: Founded = found;
      iCount = Number(founded.quantity) + 1;
    }

    const fullIPrice = price * iCount;
    dispatch(addFullIPrice({ fullIPrice, id }));
  }

  const countIPriceMinus = (id: number, price: number) => {
    let found = cartData.find((n: { id: number; }) => n.id === id);
    let iCount;
    if (found === undefined) iCount = 0;
    else {
      const founded: Founded = found;
      iCount = Number(founded) - 1;
    }

    const fullIPrice = price * iCount;
    dispatch(addFullIPrice({ fullIPrice, id }));
  }

  const toggleFav = (index: number) => {
    dispatch(toggleFavorites(currentPosts[index]));
  }

  const toggleQtyIToShow = (e: ChangeEvent<HTMLSelectElement>) => {
    setPostsPerPage(+e.target.value);
    localStorage.setItem('postsPerPage', e.target.value);
  }

  return (
    <section className="products" style={style}>
      {title && <h2>{title}</h2>}
      <div className="products__countShowItems">
        <span>Show </span>
        <select
          value={postsPerPage}
          onChange={e => toggleQtyIToShow(e)}
        >
          <option value="4">4 items each</option>
          <option value="8">8 items each</option>
        </select>
      </div>
      <div className={styles.products}>
        {currentPosts.map(({ id, image, title, author, genre, price }, index) => (
          <Card className={styles.card} key={id}>
            <Card.Img variant="top" src={`${image}`} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <div className="products__product_info">
                <div className="products__product_info_price">Price now: {price}$</div>
                <div className="products__product_info_oldPrice">Price before: {Math.floor(price ? price * 1.8 : 0)}$</div>
                <div className="products__product_info_price">Author: {author}</div>
                <div className="products__product_info_price">Genre: {genre}</div>
                <div className="products__product_info_itemsCount">
                  Items in the cart:
                  {cartData.find((n: { id: number; }) => n.id === id) === undefined
                    ? '0'
                    : // @ts-ignore: Object is possibly 'null'
                    cartData.find((n: { id: number; }) => n.id === id).quantity}
                </div>
                {// @ts-ignore: Object is possibly 'null'
                  cartData.find((n: { id: number; }) => n.id === id) === undefined || cartData.find((n: { id: number; }) => n.id === id).quantity === 0
                    ? ''
                    : // @ts-ignore: Object is possibly 'null'
                    <p>Full cost: {cartData.find((n: { id: number; }) => n.id === id).fullIPrice} $</p>}
              </div>
              <div className={styles.mainBtnsWrapper}>
                <Link className="products__product_link" to={`/items/${id}`}>
                  <Button variant="primary">Info</Button>
                </Link>
                <Button onClick={() => toggleFav(index)} variant="primary">
                  {favData.find((n: { id: number; }) => n.id === id) === undefined
                    ? 'Add to favorites'
                    : 'Del from favorites'}
                </Button>
              </div>
              <div className={styles.changeCountBtnsWrapper}>
                <Button onClick={() => addToCart(index, id, price)} variant="primary">+</Button>
                {// @ts-ignore: Object is possibly 'null'
                  cartData.find((n: { id: number; }) => n.id === id) === undefined || cartData.find((n: { id: number; }) => n.id === id).quantity === 0
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

