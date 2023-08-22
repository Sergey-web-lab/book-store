import { FC, useEffect } from "react";
import { useState } from "react";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { useAppSelector } from "../../hooks/reactReduxHooks";
import PaginationC from "../PaginationC/PaginationC";
import Products from "../Products/Products";

type HomeProps = {
  genreForFilter: string
  currentPage: number
  setCurrentPage: (arg: number) => void
}

const Home: FC<HomeProps> = ({ genreForFilter, currentPage, setCurrentPage }) => {
  const localPostsShowQty = Number(localStorage.getItem('postsPerPage'));
  const { data = [], isLoading } = useGetProductQuery(null);
  const [postsPerPage, setPostsPerPage] = useState<number>(localPostsShowQty ? localPostsShowQty : 4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const inputVal = useAppSelector(state => state.user.searchInputVal);
  const dataAfterSearchFilter = data.filter((obj: { title: string; }) => {
    if (obj.title.toLowerCase().includes(inputVal.toLowerCase())) {
      return true;
    }
    return false;
  })

  const itemsCurrentCat: object[] = dataAfterSearchFilter.filter(
    genreForFilter == 'All' || genreForFilter == 'all'
      ? (item: object) => item
      : (item: { genre: string; }) => item.genre.toLowerCase() == genreForFilter.toLowerCase()
  )

  const currentPosts: object[] = itemsCurrentCat.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [postsPerPage])

  if (isLoading) return <h1>Loading</h1>

  return (
    <>
      <Products
        currentPosts={currentPosts}
        title={`Selected category: ${genreForFilter}`}
        postsPerPage={postsPerPage}
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