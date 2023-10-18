import EditIcon from "@/components/icons/EditIcon";
import Image from "next/image";
import {
  closeDNavBar,
  toggleDNavCollapse,
} from "@/features/dNavbar/dNavbarSlice";
import Link from "next/link";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import DNavLinks from "./NavLinks/DNavLinks";
import HamMenuIcon from "@/components/icons/HamMenuIcon";

const DMobileSidebar = () => {
  const isDNavCollapsed = useSelector((state) => state.dNavbar.isDNavCollapsed);
  const dispatch = useDispatch();

  const handleNavCollapse = () => {
    dispatch(toggleDNavCollapse());
  };
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
        <div
          className={`absolute lg:hidden right-6 top-6 w-[35px] z-30`}
          onClick={handleNavCollapse}
        >
          <HamMenuIcon
            className={`${isDNavCollapsed ? "" : "menu-open"} sidebar-hamBtn`}
          />
        </div>

        <nav className="h-full w-full flex flex-col justify-between pt-10">
          {/* nav header */}
          <div className="flex flex-col gap-8">
            <div className="flex justify-center border-b-2 pb-2">
              <Link href="/" className="flex justify-center w-2/4">
                <Image
                  src="/seatoLogo.png"
                  alt="seato logo"
                  width={80}
                  height={35}
                />
              </Link>
            </div>

            {/* navLinks */}
            <DNavLinks />
          </div>

          {/* Footer */}
          <footer className="bottom-5 right-0 left-0">
            <div className="flex items-center gap-3 justify-between w-full">
              {/* profile pic and name */}
              <div className="flex items-center gap-3 justify-between">
                <div className="rounded-full w-10 h-10 bg-pink-200"></div>
                <div>
                  <h5 className="text-sm">سینا مرادیان</h5>
                  <h6 className="text-xs text-gray-500">استایلیست</h6>
                </div>
              </div>

              {/* edit icon */}
              <Link
                className="flex gap-2 p-3 rounded-xl items-center hover:text-pink-200"
                href="/salon-dashboard/edit"
                onClick={() => dispatch(closeDNavBar())}
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
