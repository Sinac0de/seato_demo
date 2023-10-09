import { Link } from "react-router-dom";
import NavBar from "src/layout/NavBar/NavBar";
import seatoLogoImg from "src/assets/images/seatoLogo.png";
import HamMenuIcon from "src/assets/icons/HamMenuIcon";
import MobileNavBar from "src/layout/NavBar/MobileNavBar";
import { useState } from "react";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed((prev) => !prev);
  };

  return (
    <header className="p-10 lg:p-8 px-14 relative bg-[#FDDDD780] font-medium text-[15px]">
      <div
        className={`lg:hidden absolute right-8 top-10 w-[35px] z-10`}
        onClick={handleNavCollapse}
      >
        <HamMenuIcon
          className={`${isNavCollapsed ? "" : "menu-open"} sidebar-hamBtn`}
        />
      </div>

      {/* logo */}
      <Link to="/" className="absolute top-6 right-0 left-0 mx-auto w-fit">
        <img src={seatoLogoImg} />
      </Link>
      {/* nav bar */}
      <MobileNavBar
        isNavCollapsed={isNavCollapsed}
        setIsNavCollapsed={setIsNavCollapsed}
      />
      <NavBar />
    </header>
  );
};

export default Header;
