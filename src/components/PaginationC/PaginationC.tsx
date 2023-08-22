import style from "./PaginationC.module.css";
import Pagination from 'react-bootstrap/Pagination';
import { FC } from "react";

type PaginationCProps = {
  totalPosts: number
  postsPerPage: number
  setCurrentPage: (arg: number) => void
  currentPage: number
}

const PaginationC: FC<PaginationCProps> = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];
  let active = currentPage;

  const handleClick = (i: number) => {
    setCurrentPage(i);
    window.scrollTo(0, 0);
  }

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(
      <Pagination.Item onClick={() => handleClick(i)} key={i} active={i === active}>
        {i}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      <Pagination className={style.pagination}>{pages}</Pagination>
    </div>
  );
}

export default PaginationC;