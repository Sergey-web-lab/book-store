import { useEffect } from "react";
import { useState } from "react";
import { useGetProductQuery } from "../../features/api/apiSlice";
import PaginationC from "../PaginationC/PaginationC";
import Products from "../Products/Products";

const Home = ({ genreForFilter, currentPage, setCurrentPage }) => {
  const localPostsShowQty = localStorage.getItem('postsPerPage');
  const { data = [], isLoading } = useGetProductQuery();
  const [postsPerPage, setPostsPerPage] = useState(localPostsShowQty ? localPostsShowQty : 4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const itemsCurrentCat = data.filter(
    genreForFilter == 'All' || genreForFilter == 'all'
      ? item => item
      : item => item.genre.toLowerCase() == genreForFilter.toLowerCase()
  )

  const currentPosts = itemsCurrentCat.slice(firstPostIndex, lastPostIndex);


  useEffect(() => {
    setCurrentPage(1);
  }, [postsPerPage])

  if (isLoading) return <h1>Loading</h1>

  return (
    <>
      <Products
        products={currentPosts}
        title="Trending"
        postPerPage={postsPerPage}
        setPostsPerPage={setPostsPerPage}
        localPostsShowQty={localPostsShowQty}
      />
      <PaginationC
        totalPosts={itemsCurrentCat.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default Home;