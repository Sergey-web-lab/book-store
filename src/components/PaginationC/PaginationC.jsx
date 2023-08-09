import style from "./PaginationC.module.css";
import Pagination from 'react-bootstrap/Pagination';

const PaginationC = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];
  let active = currentPage;

  const handleClick = (i) => {
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