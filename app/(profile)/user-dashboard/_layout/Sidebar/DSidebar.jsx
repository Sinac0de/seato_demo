import EditIcon from "@/components/icons/EditIcon";
import Image from "next/image";
import Link from "next/link";
import DNavLinks from "./NavLinks/DNavLinks";
import { useDispatch } from "react-redux";

const DSidebar = () => {
  const dispatch = useDispatch();
  return (
    <aside className="p-4 px-7 bg-white lg:w-1/6 flex-col gap-5 max-h-screen sticky top-0 hidden lg:flex">
      {/* Header */}
      <header className="border-b-2 flex justify-center items-center p-3">
        <Link href="/">
          <Image
            src="/seatoLogo.png"
            alt="seato logo"
            width={100}
            height={35}
          />
        </Link>
      </header>

      {/* navLinks */}
      <DNavLinks />

      {/* Footer */}
      <footer className="absolute bottom-5 right-0 left-0 p-4">
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
            href="/user-dashboard/edit"
          >
            <EditIcon />
          </Link>
        </div>
      </footer>
    </aside>
  );
};

export default DSidebar;
