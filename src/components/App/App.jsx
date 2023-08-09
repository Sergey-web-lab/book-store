import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const App = () => {
  const [genreForFilter, setGenreForFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="app">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;