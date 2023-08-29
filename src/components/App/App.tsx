import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [genreForFilter, setGenreForFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [])

  return (
    <div className="app">
      <Header />
      <div className="contentPart">
        <div className="container">
          <Sidebar
            setGenreForFilter={setGenreForFilter}
            setCurrentPage={setCurrentPage}
          />
          <AppRoutes
            genreForFilter={genreForFilter}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;