"use client";
import "@/app/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import DSidebar from "./_layout/Sidebar/DSidebar";
import DMobileSidebar from "./_layout/Sidebar/DMobileSidebar";
import DHeader from "./_layout/Header/DHeader";

export default function DashboardLayout({ children }) {
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

          {/* mobile sidebar */}
          <DMobileSidebar />
          {/* sidebar nav */}
          <div className="flex">
            <DSidebar />

            <div className="flex flex-col flex-1">
              <DHeader />
              <main className="relative min-h-screen bg-[#f8f8f8] w-full p-5">
                {children}
              </main>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
