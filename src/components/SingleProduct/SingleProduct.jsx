import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../features/api/apiSlice";
import Product from "./Product";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetSingleProductQuery({ id });

  return (
    <div className="singleProduct">
      <h1>Single product info</h1>
      <Product {...data} />
    </div >
  );
}

export default SingleProduct;