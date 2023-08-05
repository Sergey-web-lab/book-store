import styles from "./OrderForm.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useSelector } from "react-redux";

const OrderForm = () => {
  const userState = useSelector(state => state.user);
  const cartList = userState.cart;
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { email: `${userState.isAuth && userState.currentUser.email}` }
  });
  const onSubmit = data => console.log(data);
  const [delivOrNot, setDelivOrNot] = useState('delivery');

  let fullAmount = 0;
  cartList.forEach((item) => {
    fullAmount += item.quantity;
  })

  let price = 0;
  cartList.forEach((item) => {
    price += item.fullIPrice;
  })

  return (
    <div className={styles.orderForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>OrderForm</h1>
        <input placeholder="Name" {...register("Name",
          { required: "Name is required", minLength: { value: 2, message: "Min length is 2" } }
        )} />
        <p>Your name</p>
        <input type='email' placeholder="email" {...register("email", { required: "Email is required" })} />
        <p>Your email</p>
        <input type='checkbox' {...register("getNews")} />
        <p>Would you like to receive a newsletter?</p>
        <select
          value={delivOrNot}
          onChange={e => setDelivOrNot(e.target.value)}
        >
          <option value="delivery" >Delivery</option>
          <option value="pickup">Pickup</option>
        </select>
        <p>Delivery or pickup</p>
        {delivOrNot === 'delivery'
          ?
          <>
            <h3>Delivery</h3>
            <input type='text' {...register("address")} />
            <input type='time' {...register("time")} />
          </>
          :
          <>
            <h3>Pickup</h3>
            <h5>Address</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, obcaecati.</p>
            <h5>Working hours</h5>
            <p>10.00 - 19.00 everyday except holidays.</p>
          </>}
        <input type="submit" />
      </form>
      <div className="orderForm__itemsInfo">
        <h1>You order:</h1>
        <h4>All items: {fullAmount}</h4>
        <h4>All price: {price} $</h4>
        <Link to={ROUTES.CART}>Back to cart</Link>
      </div>
    </div >
  );
}

export default OrderForm;