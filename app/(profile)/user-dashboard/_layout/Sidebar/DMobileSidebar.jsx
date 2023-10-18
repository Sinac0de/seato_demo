import HomeIcon from "@/components/icons/HomeIcon";
import LogOutIcon from "@/components/icons/LogOut";
import SalonsIcon from "@/components/icons/SalonsIcon";
import SmileIcon from "@/components/icons/SmileIcon";
import TimeSetterIcon from "@/components/icons/TimeSetterIcon";
import EditIcon from "@/components/icons/EditIcon";
import Image from "next/image";
import { toggleDNavCollapse } from "@/features/dNavbar/dNavbarSlice";
import Link from "next/link";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const DMobileSidebar = () => {
  const isDNavCollapsed = useSelector((state) => state.dNavbar.isDNavCollapsed);
  const dispatch = useDispatch();
  return (
    <Fragment>
      {/* behind the nav bar */}
      <div
        className={`${
          isDNavCollapsed
            ? "opacity-0 translate-x-full"
            : "opacity-100 translate-x-0"
        } w-full lg:hidden h-full fixed right-0 left-0 bottom-0 top-0 z-20 bg-black/70 transition-opacity duration-500`}
        onClick={() => dispatch(toggleDNavCollapse())}
      ></div>

      {/* actual nav bar */}
      <div
        className={`${
          isDNavCollapsed ? "translate-x-full" : "translate-x-0"
        } fixed right-0 bottom-0 bg-white border-l-2 shadow-2xl rounded-l-3xl h-full w-3/4 z-20 transition-transform lg:hidden duration-500 flex flex-col text-secondary-400 overflow-y-auto p-4 px-7 lg:w-1/6 gap-5 max-h-screen top-0`}
      >
        <nav className="h-full w-full flex flex-col justify-between pt-10">
          {/* nav header */}
          <header>
            <Link href="/">
              <Image
                src="/seatoLogo.png"
                alt="seato logo"
                width={140}
                height={35}
              />
            </Link>
          </header>
          {/* nav links */}
          <div className="flex flex-col gap-4">
            <Link className="flex items-center gap-2" href="/user-dashboard">
              <HomeIcon />
              <h3>داشبورد</h3>
            </Link>
            <Link
              className="flex items-center gap-2"
              href="/user-dashboard/salons"
            >
              <SalonsIcon />
              <h3>سالن‌های من</h3>
            </Link>
            <Link
              className="flex items-center gap-2"
              href="/user-dashboard/reserved-times"
            >
              <SmileIcon />
              <h3>وقت‌های رزرو شده</h3>
            </Link>
            <Link
              className="flex items-center gap-2"
              href="/user-dashboard/set-weekly-time"
            >
              <TimeSetterIcon />
              <h3>تنظیم وقت خالی</h3>
            </Link>
            <Link className="flex items-center gap-2" href="/user-dashboard/">
              <LogOutIcon />
              <h3>خروج</h3>
            </Link>
          </div>

          {/* Footer */}
          <footer className="bottom-5 right-0 left-0 p-4">
            <div className="flex items-center gap-3 justify-between">
              {/* profile pic and name */}
              <div className="flex items-center gap-3 justify-between">
                <div className="rounded-full w-10 h-10 bg-pink-200"></div>
                <div>
                  <h5>سینا مرادیان</h5>
                  <h6 className="text-xs text-gray-500">کاربر</h6>
                </div>
              </div>

              {/* edit icon */}
              <Link
                className="flex gap-2 p-3 rounded-xl items-center hover:text-pink-200"
                href="/user-dashboard/"
              >
                <EditIcon />
              </Link>
            </div>
          </footer>
        </nav>
      </div>
    </Fragment>
  );
};

export default DMobileSidebar;
