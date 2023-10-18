import HamMenuIcon from "@/components/icons/HamMenuIcon";
import { toggleDNavCollapse } from "@/features/dNavbar/dNavbarSlice";
import { useDispatch, useSelector } from "react-redux";

const DHeader = () => {
  const isDNavCollapsed = useSelector((state) => state.dNavbar.isDNavCollapsed);
  const dispatch = useDispatch();

  const handleNavCollapse = () => {
    dispatch(toggleDNavCollapse());
  };

  return (
    <header className="sticky top-0 p-7 bg-white flex items-center gap-4 z-10">
      {/* border curve */}
      <div className="bg-white absolute top-20 right-0 w-4 h-4 hidden lg:block">
        <div className="bg-[#f8f8f8] h-full w-full rounded-tr-full"></div>
      </div>
      <div
        className={`lg:hidden right-8 top-9 w-[35px] z-30`}
        onClick={handleNavCollapse}
      >
        <HamMenuIcon
          className={`${isDNavCollapsed ? "" : "menu-open"} sidebar-hamBtn`}
        />
      </div>
      <h2>سلام سینا مرادیان عزیز</h2>
    </header>
  );
};

export default DHeader;
