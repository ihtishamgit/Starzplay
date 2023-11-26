import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ExploreMovies from "../Components/ExploreMovies/ExporeMovies";

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <ExploreMovies />
      <Footer />
    </div>
  );
};
export default Layout;
