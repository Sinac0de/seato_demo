import NavBar from "@/layout/NavBar/NavBar";
import HamMenuIcon from "@/components/icons/HamMenuIcon";
import MobileNavBar from "@/layout/NavBar/MobileNavBar";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavCollapse } from "../../features/navbar/navbarSlice";
import Link from "next/link";
import SeatoLogo from "@/components/icons/SeatoLogo";

const Header = () => {
  const isNavCollapsed = useSelector((state) => state.navbar.isNavCollapsed);
  const dispatch = useDispatch();

  const handleNavCollapse = () => {
    dispatch(toggleNavCollapse());
  };

  return (
    <header className="p-10 lg:p-8 px-14 relative bg-[#FDDDD780] font-medium text-[15px]">
      <div
        className={`lg:hidden absolute right-8 top-9 w-[35px] z-30`}
        onClick={handleNavCollapse}
      >
        <HamMenuIcon
          className={`${isNavCollapsed ? "" : "menu-open"} sidebar-hamBtn`}
        />
      </div>

      {/* logo */}
      <Link href="/" className="absolute top-6 right-0 left-0 mx-auto w-fit">
        {/* <img src="/seatoLogo.png" /> */}
        <SeatoLogo />
      </Link>
      {/* nav bar */}
      <MobileNavBar />
      <NavBar />
    </header>
  );
};

export default Header;
