import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { FC } from "react";
import Home from "../Home/Home";
import SingleProduct from "../SingleProduct/SingleProduct";
import LoginPage from "../User/LoginPage";
import RegisterPage from "../User/RegisterPage";
import IsAuthPage from "../User/IsAuthPage";
import Info from "../Info/Info";
import Cart from "../Cart/Cart";
import Favorites from "../Favorites/Favorites";
import OrderForm from "../OrderForm/OrderForm";
import NotFound from "../NotFound/NotFound";

type AppRoutesProps = {
  genreForFilter: string
  currentPage: number
  setCurrentPage: (arg: number) => void
}

const AppRoutes: FC<AppRoutesProps> = ({ genreForFilter, currentPage, setCurrentPage }) => {
  return (
    <Routes>
      <Route index element={
        <Home genreForFilter={genreForFilter}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
      } />
      <Route path={ROUTES.HOMEGHPAGES} element={< Home
        genreForFilter={genreForFilter}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.ISAUTHPAGE} element={<IsAuthPage />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.INFO} element={<Info />} />
      <Route path={ROUTES.FAVORITES} element={<Favorites />} />
      <Route path={ROUTES.ORDERFORM} element={<OrderForm />} />
      <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;