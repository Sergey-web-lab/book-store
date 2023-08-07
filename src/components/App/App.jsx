import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const App = () => {
  const [genreForFilter, setGenreForFilter] = useState('All');

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar setGenreForFilter={setGenreForFilter} />
        <AppRoutes genreForFilter={genreForFilter} />
      </div>
      <Footer />
    </div>
  );
}

export default App;