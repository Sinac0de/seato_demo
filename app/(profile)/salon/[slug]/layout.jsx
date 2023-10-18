"use client";
import "@/app/globals.css";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import NextNProgressClient from "@/components/progressbar/ProgressNext";
import DSidebar from "./_layout/Sidebar/DSidebar";
import DMobileSidebar from "./_layout/Sidebar/DMobileSidebar";
import DHeader from "./_layout/Header/DHeader";

export default function DashboardLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Provider store={store}>
          <NextNProgressClient />

          {/* mobile sidebar */}
          <DMobileSidebar />
          {/* sidebar nav */}
          <DSidebar />

          <div>
            <DHeader />
            <main className="min-h-screen">{children}</main>
            {/* <Footer /> */}
          </div>
        </Provider>
      </body>
    </html>
  );
}
