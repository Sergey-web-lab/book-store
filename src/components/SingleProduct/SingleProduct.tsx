import styles from "./SingleProduct.module.css";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../features/api/apiSlice";
import Product from "./Product";

const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useGetSingleProductQuery({ id });

  return (
    <div className={styles.singleProduct}>
      <h1>Single product info</h1>
      <Product {...data} />
    </div >
  );
}

export default SingleProduct;