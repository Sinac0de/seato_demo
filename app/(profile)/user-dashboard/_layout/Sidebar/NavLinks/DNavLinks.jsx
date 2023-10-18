import HomeIcon from "@/components/icons/HomeIcon";
import LogOutIcon from "@/components/icons/LogOut";
import SmileIcon from "@/components/icons/SmileIcon";
import TimeSetterIcon from "@/components/icons/TimeSetterIcon";
import { closeDNavBar } from "@/features/dNavbar/dNavbarSlice";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

const DNavLinks = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-3">
      <Link
        className={`${
          pathname === "/user-dashboard" ? "bg-pink-100" : ""
        } flex gap-2 p-3  transition-all duration-300 hover:bg-pink-100 rounded-xl items-center`}
        onClick={() => dispatch(closeDNavBar())}
        href="/user-dashboard"
      >
        <HomeIcon />
        <h3>داشبورد</h3>
      </Link>
      <Link
        className={`${
          pathname === "/user-dashboard/reserved" ? "bg-pink-100" : ""
        } flex gap-2 p-3  transition-all duration-300 hover:bg-pink-100 rounded-xl items-center`}
        onClick={() => dispatch(closeDNavBar())}
        href="/user-dashboard/reserved"
      >
        <SmileIcon />
        <h3>وقت‌های رزرو شده</h3>
      </Link>
      <Link
        className="flex gap-2 p-3 rounded-xl items-center hover:text-pink-200"
        href="/"
      >
        <LogOutIcon />
        <h3>خروج</h3>
      </Link>
    </div>
  );
};

export default DNavLinks;
