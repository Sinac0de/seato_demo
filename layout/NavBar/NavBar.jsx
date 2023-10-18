import Link from "next/link";
import LoginSignUpBtns from "@/components/LoginSignUp/LoginSignUpBtns/LoginSignUpBtns";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full flex lg:justify-between justify-end items-center">
      {/* nav links */}
      <ul className="lg:flex gap-6 hidden text-[15px]">
        <li>
          <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link
            href="/salons"
            className={pathname === "/salons" ? "font-bold" : ""}
          >
            سالن&zwnj;های زیبایی
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? "font-bold" : ""}
          >
            درباره ما
          </Link>
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
