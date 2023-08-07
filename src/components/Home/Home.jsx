import { useEffect } from "react";
import { useState } from "react";
import { useGetProductQuery } from "../../features/api/apiSlice";
import PaginationC from "../PaginationC/PaginationC";
import Products from "../Products/Products";

const Home = ({ genreForFilter }) => {
  const [qtyIToShow, setQtyIToShow] = useState(4);
  const { data = [], isLoading } = useGetProductQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(qtyIToShow);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const itemsCurrentCat = data.filter(
    genreForFilter == 'All' || genreForFilter == 'all'
      ? item => item
      : item => item.genre.toLowerCase() == genreForFilter.toLowerCase()
  )

  const currentPosts = itemsCurrentCat.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    setPostPerPage(qtyIToShow);
    setCurrentPage(1);
  }, [qtyIToShow])

  if (isLoading) return <h1>Loading</h1>

  return (
    <>
      <Products
        products={currentPosts}
        title="Trending"
        qtyIToShow={qtyIToShow}
        setQtyIToShow={setQtyIToShow}
      />
      <PaginationC
        totalPosts={itemsCurrentCat.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default Home;