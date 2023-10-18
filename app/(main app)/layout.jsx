"use client";
import "@/app/globals.css";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";
import LoginModal from "@/components/Modal/LoginModal";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Provider store={store}>
          <ProgressBar
            height="4px"
            color="#000"
            options={{ showSpinner: false }}
            shallowRouting
          />
          <LoginModal defaultType="login" />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
