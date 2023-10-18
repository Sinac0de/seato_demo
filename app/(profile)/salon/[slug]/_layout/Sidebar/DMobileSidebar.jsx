import HomeIcon from "@/components/icons/HomeIcon";
import LogOutIcon from "@/components/icons/LogOut";
import SalonsIcon from "@/components/icons/SalonsIcon";
import SmileIcon from "@/components/icons/SmileIcon";
import TimeSetterIcon from "@/components/icons/TimeSetterIcon";
import Image from "next/image";
import Link from "next/link";

const DMobileSidebar = () => {
  return (
    <aside>
      <header>
        <Link href="/">
          <Image
            src="/seatoLogo.png"
            alt="seato logo"
            width={140}
            height={35}
          />
        </Link>
      </header>

      <div>
        <Link href="/salon-dashboard">
          <HomeIcon />
          <h3>داشبورد</h3>
        </Link>
        <Link href="/salon-dashboard/salons">
          <SalonsIcon />
          <h3>سالن‌های من</h3>
        </Link>
        <Link href="/salon-dashboard/reserved-times">
          <SmileIcon />
          <h3>وقت‌های رزرو شده</h3>
        </Link>
        <Link href="/salon-dashboard/set-weekly-time">
          <TimeSetterIcon />
          <h3>تنظیم وقت خالی</h3>
        </Link>
        <Link href="/salon-dashboard/">
          <LogOutIcon />
        </Link>
      </div>

      <footer>
        <div>
          <div></div>
          <div>
            <h5>سینا مرادیان</h5>
            <h6>استایلیست</h6>
          </div>
        </div>
      </footer>
    </aside>
  );
};

export default DMobileSidebar;
