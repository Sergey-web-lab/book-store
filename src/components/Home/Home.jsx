import { useGetProductQuery } from "../../features/api/apiSlice";
import PaginationC from "../PaginationC/PaginationC";
import Products from "../Products/Products";

const Home = () => {
  const { data = [], isLoading } = useGetProductQuery();
  const list = data;
  if (isLoading) return <h1>Loading</h1>

  return (
    <>
      <Products products={list} amount={8} title="Trending" />
      <PaginationC />
    </>
  );
}

export default Home;