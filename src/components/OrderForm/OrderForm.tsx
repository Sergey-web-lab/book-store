import styles from "./OrderForm.module.css";
import formDataChecker from "./formDataChecker";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useAppSelector } from "../../hooks/reactReduxHooks";

const OrderForm = () => {
  enum DelivOrNotEnum {
    delivery = 'Delivery',
    pickup = 'Pickup'
  }

  type Inputs = {
    name: string
    tel: number | string
    email: string
    getNews: boolean
    delivOrNot: DelivOrNotEnum
    address: string
    dateAndTime: string
  }

  type CurrentUser = {
    email?: string
  }

  const [formData, setFormData] = useState<any>({});

  const resetFormData = () => {
    const resetBtn = document.getElementById('orderForm__reset');
    if (resetBtn !== undefined && resetBtn !== null) {
      resetBtn.click();
    }
  }

  useEffect(() => {
    setFormData(formDataChecker());
    setTimeout(() => {
      resetFormData();
    }, 1)
  }, [])

  const userState = useAppSelector(state => state.user);
  const cartList = userState.cart;
  const currentUser: CurrentUser = userState.currentUser;
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
    mode: 'onBlur',
    defaultValues: {
      email: `${userState.isAuth ? currentUser.email : ''}`
    }
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const fullInfo = { ...data, cartList };
    console.log(JSON.stringify(fullInfo));
  }

  const [delivOrNot, setDelivOrNot] = useState('delivery');

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

  return (
    <div className={styles.orderForm}>
      <form className={styles.orderFormInputBlock} onSubmit={handleSubmit(onSubmit)}>
        <h1>OrderForm</h1>
        <InputGroup>
          <InputGroup.Text id="name">Name</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            aria-label="Enter your name"
            aria-describedby="name"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Min length is 2" },
              pattern: {
                value: /^[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я0-9-_\.]{1,20}$/,
                message: 'Error name format. Еhe first character must be a letter'
              }
            })}
          />
        </InputGroup>
        {errors.name && <p className="err">{errors.name?.message}</p>}
        <InputGroup className={styles.input}>
          <InputGroup.Text id="tel">Phone</InputGroup.Text>
          <Form.Control
            type="tel"
            placeholder="Enter your phone"
            aria-label="Enter your phone"
            aria-describedby="tel"
            {...register("tel", {
              required: "Phone is required",
              pattern: {
                value: /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
                message: 'Error phone format.'
              }
            })}
          />
        </InputGroup>
        {errors.tel && <p className="err">{errors.tel?.message}</p>}
        <InputGroup className={styles.input}>
          <InputGroup.Text id="email">Email</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            aria-label="Enter your email"
            aria-describedby="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
                message: 'Error email format.'
              }
            })}
          />
        </InputGroup>
        {errors.email && <p className="err">{errors.email?.message}</p>}
        <div className={styles.questionBlockWrapper}>
          <input className={styles.checkbox} type='checkbox' {...register("getNews")} />
          <p className={styles.checkboxText}>Would you like to receive a newsletter?</p>
        </div>
        <select
          className={styles.select}
          {...register("delivOrNot")}
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
            <InputGroup className={styles.input}>
              <InputGroup.Text id="address">Address</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                aria-label="Enter your address"
                aria-describedby="address"
                {...register("address", { required: "Address is required" })}
              />
            </InputGroup>
            {errors.address && <p className="err">{errors.address?.message}</p>}
            <InputGroup className={styles.input}>
              <InputGroup.Text id="dateAndTime">Date and time</InputGroup.Text>
              <Form.Control
                type="datetime-local"
                placeholder="Enter your date and time"
                aria-label="Enter your date and time"
                aria-describedby="dateAndTime"
                {...register("dateAndTime", { required: "Date and time is required" })}
              />
            </InputGroup>
            {errors.dateAndTime && <p className="err">{errors.dateAndTime?.message}</p>}
          </>
          :
          <>
            <h3>Pickup</h3>
            <h5>Address</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, obcaecati.</p>
            <h5>Working hours</h5>
            <p>10.00 - 19.00 everyday except holidays.</p>
          </>}
        <div className={styles.btnsWrapper}>
          <button className={styles.btn}>Submit</button>
          <input
            className={styles.resetBtn}
            type="button"
            value="Reset Fields Values"
            onClick={() => {
              reset(
                {
                  name: '',
                  tel: '',
                  email: `${userState.isAuth ? currentUser.email : ''}`,
                  address: '',
                  dateAndTime: ''
                })
            }}
          />
          <input
            id="orderForm__reset"
            className={styles.resetBtn2}
            type="button"
            onClick={() => {
              reset(
                {
                  name: `${formData.name ? formData.name : ''}`,
                  tel: `${formData.tel ? formData.tel : ''}`,
                  email: `${formData.email ? formData.email : ''}`,
                  getNews: Boolean(`${formData.getNews ? formData.getNews : ''}`),
                  address: `${formData.address ? formData.address : ''}`,
                  dateAndTime: `${formData.dateAndTime ? formData.dateAndTime : ''}`
                })
            }}
          />
        </div>
      </form>
      <div className={styles.orderInfo}>
        <h1>You order:</h1>
        <h4>All items: {fullAmount}</h4>
        <h4>All price: {price} $</h4>
        <Link className={styles.orderInfo_link} to={ROUTES.CART}>Back to cart</Link>
      </div>
    </div >
  );
}

export default OrderForm;