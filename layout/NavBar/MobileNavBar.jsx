import { Fragment } from "react";
import LoginSignUpBtns from "@/components/LoginSignUp/LoginSignUpBtns/LoginSignUpBtns";
import { toggleNavCollapse } from "../../features/navbar/navbarSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavBar = () => {
  const isNavCollapsed = useSelector((state) => state.navbar.isNavCollapsed);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const styles = {
    activeLink:
      "font-bold border border-[#ff8bde] rounded-full px-10 p-2 w-full text-center",
    link: "border border-[#ff8bde] rounded-full px-10 p-2 w-full text-center",
  };

  return (
    <Fragment>
      {/* behind the nav bar */}
      <div
        className={`${
          isNavCollapsed
            ? "opacity-0 translate-x-full"
            : "opacity-100 translate-x-0"
        } w-full lg:hidden h-full fixed right-0 left-0 bottom-0 top-0 z-20 bg-black/70 transition-opacity duration-500`}
        onClick={() => dispatch(toggleNavCollapse())}
      ></div>

      {/* actual nav bar */}
      <div
        className={`${
          isNavCollapsed ? "translate-x-full" : "translate-x-0"
        } fixed right-0 bottom-0 bg-gradient-to-b from-[#FFE7E2] to-[white] border-l-2 shadow-2xl rounded-l-3xl h-full w-3/4 z-20 transition-transform lg:hidden duration-500 flex flex-col text-secondary-400 overflow-y-auto`}
      >
        <nav className="h-full w-full flex flex-col justify-between pt-10">
          {/* nav header */}
          <div className="h-1/6 flex flex-col justify-center items-center gap-9">
            <img src="/seatoLogo.png" className="w-1/4" />
          </div>
          {/* nav links */}
          <ul className="flex flex-col items-center text-xl gap-6 text-[15px] flex-1 py-5 overflow-y-auto">
            <li className="w-full flex px-5 item">
              <Link
                onClick={() => dispatch(toggleNavCollapse())}
                href="/"
                className={pathname == "/" ? styles.activeLink : styles.link}
              >
                صفحه اصلی
              </Link>
            </li>
            <li className="w-full flex px-5 item">
              <Link
                onClick={() => dispatch(toggleNavCollapse())}
                href="/salons"
                className={
                  pathname == "/salons" ? styles.activeLink : styles.link
                }
              >
                سالن&zwnj;های زیبایی
              </Link>
            </li>
            <li className="w-full flex px-5 item">
              <Link
                onClick={() => dispatch(toggleNavCollapse())}
                href="/about"
                className={
                  pathname == "/about" ? styles.activeLink : styles.link
                }
              >
                درباره ما
              </Link>
            </li>
          </ul>
          {/* user actions */}
          <div className="flex flex-col gap-5 px-10 py-10">
            <LoginSignUpBtns isSidebar />
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default MobileNavBar;
