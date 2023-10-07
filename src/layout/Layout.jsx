import { Fragment } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "src/components/ScrollToTop/ScrollToTop";

const Layout = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
