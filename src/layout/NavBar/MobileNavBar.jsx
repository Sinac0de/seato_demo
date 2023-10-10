import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import seatoLogo from "src/assets/images/seatoLogo.png";
import LoginSignUpBtns from "src/components/LoginSignUp/LoginSignUpBtns/LoginSignUpBtns";
import { toggleNavCollapse } from "../../features/navbar/navbarSlice";
import { useDispatch, useSelector } from "react-redux";

const MobileNavBar = () => {
  const isNavCollapsed = useSelector((state) => state.modal.isNavCollapsed);
  const dispatch = useDispatch();
  return (
    <Fragment>
      {/* behind the nav bar */}
      <div
        className={`${
          isNavCollapsed
            ? "opacity-0 translate-x-full"
            : "opacity-100 translate-x-0"
        } w-full lg:hidden h-full fixed right-0 left-0 bottom-0 top-0 z-[998] bg-black/70 transition-opacity duration-500`}
        onClick={() => dispatch(toggleNavCollapse)}
      ></div>

      {/* actual nav bar */}
      <div
        className={`${
          isNavCollapsed ? "translate-x-full" : "translate-x-0"
        } fixed right-0 bottom-0 bg-gradient-to-b from-[#FFE7E2] to-[white] border-l-2 shadow-2xl rounded-l-3xl h-full w-3/4 z-[999] transition-transform lg:hidden duration-500 flex flex-col text-secondary-400 overflow-y-auto`}
      >
        <nav className="h-full w-full flex flex-col justify-between pt-10">
          {/* nav header */}
          <div className="h-1/6 flex flex-col justify-center items-center gap-9">
            <img src={seatoLogo} className="w-1/4" />
          </div>
          {/* nav links */}
          <ul className="flex flex-col items-center text-xl gap-6 text-[15px] flex-1 py-5 overflow-y-auto">
            <li className="w-full flex px-5 item">
              <NavLink
                onClick={() => dispatch(toggleNavCollapse)}
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-bold border border-[#ff8bde] rounded-full px-10 p-2 w-full text-center"
                    : "border border-[#ff8bde] rounded-full px-10 p-2 w-full text-center"
                }
              >
                صفحه اصلی
              </NavLink>
            </li>
            <li className="w-full flex px-5 item">
              <NavLink
                onClick={() => dispatch(toggleNavCollapse)}
                to="/salons"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-bold border border-[#ff8bde] rounded-full px-10 p-2 w-full text-center"
                    : "border border-[#ff8bde] rounded-full px-10 p-2 w-full text-center"
                }
              >
                سالن&zwnj;های زیبایی
              </NavLink>
            </li>
            <li className="w-full flex px-5 item">
              <NavLink
                onClick={() => dispatch(toggleNavCollapse)}
                to="/About"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-bold border border-[#ff8bde] rounded-full px-10 p-2 w-full text-center"
                    : "border border-[#ff8bde] rounded-full px-10 p-2 w-full text-center"
                }
              >
                درباره ما
              </NavLink>
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
