import { Link, NavLink } from "react-router-dom";
import LoginSignUpBtns from "src/components/LoginSignUp/LoginSignUpBtns/LoginSignUpBtns";

const NavBar = () => {
  return (
    <nav className="w-full flex lg:justify-between justify-end items-center">
      {/* nav links */}
      <ul className="lg:flex gap-6 hidden text-[15px]">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "font-bold" : ""
            }
          >
            صفحه اصلی
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/salons"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "font-bold" : ""
            }
          >
            سالن&zwnj;های زیبایی
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "font-bold" : ""
            }
          >
            درباره ما
          </NavLink>
        </li>
      </ul>
      {/* user actions */}
      <div className="items-center gap-5 hidden lg:flex">
        <LoginSignUpBtns isSidebar={false} />
      </div>
    </nav>
  );
};

export default NavBar;
