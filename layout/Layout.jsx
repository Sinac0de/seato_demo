import { Fragment } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollToTop from "src/components/ScrollToTop/ScrollToTop";
import LoginModal from "src/components/Modal/LoginModal";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <ScrollToTop />
      <LoginModal defaultType="login" />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
