import { BsInstagram, BsWhatsapp, BsTelegram } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className="bg-[#020202] p-10 text-[#FDDDD7]">
      <div className="flex flex-col gap-5">
        {/* up line */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end border-b-2 border-[#FDDDD7] pb-5 gap-5">
          <img src="footerlogo.png" alt="logo" className="w-fit" />
          <p className="text-base lg:text-xl">
            آدرس: همدان، دانشگاه بوعلی سینا، مرکز نوآوری و شتابدهی کنـدو
          </p>
        </div>

        {/* bottom section */}
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <p className="order-2 text-center md:text-right text-xs lg:text-base">
            تمامی حقوق مادی و معنوی این وبسایت متعلق به سیتو میباشد.
          </p>
          <div className="flex justify-around md:justify-end items-center gap-3 order-1 lg:order-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.whatsapp.com"
            >
              <IconContext.Provider value={{ size: "24px" }}>
                <BsWhatsapp />
              </IconContext.Provider>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com"
            >
              <IconContext.Provider value={{ size: "24px" }}>
                <BsInstagram />
              </IconContext.Provider>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.telegram.com"
            >
              <IconContext.Provider value={{ size: "24px" }}>
                <BsTelegram />
              </IconContext.Provider>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:seatoostartup@gmail.com"
            >
              <IconContext.Provider value={{ size: "24px" }}>
                <HiOutlineMail />
              </IconContext.Provider>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="tel:09928520340">
              <IconContext.Provider value={{ size: "24px" }}>
                <BiPhoneCall />
              </IconContext.Provider>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
