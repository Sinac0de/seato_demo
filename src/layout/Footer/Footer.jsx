import footerLogoImg from "src/assets/images/footerlogo.png";
import instaLogoImg from "src/assets/images/footerinsta.png";
import CallIcon from "src/assets/icons/CallIcon";
import WhatsappIcon from "src/assets/icons/WhatsappIcon";
import InstaIcon from "src/assets/icons/InstaIcon";

const Footer = () => {
  return (
    <footer className="bg-[#020202] p-10 text-[#FDDDD7]">
      <div className="flex flex-col gap-5">
        {/* up line */}
        <div className="flex justify-between items-end border-b-2 border-[#FDDDD7] pb-5 gap-5">
          <img src={footerLogoImg} alt="logo" className="w-1/6 lg:w-fit" />
          <p>آدرس: همدان، دانشگاه بوعلی سینا، مرکز نوآوری و شتابدهی کنـدو</p>
        </div>

        {/* bottom section */}
        <div className="flex flex-col lg:flex-row justify-between gap-2">
          <p className="order-2">
            تمامی حقوق مادی و معنوی این وبسایت متعلق به سیتو میباشد.
          </p>
          <div className="flex gap-2 order-1 lg:order-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.whatsapp.com"
            >
              <WhatsappIcon />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com"
            >
              <InstaIcon />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="tel:0900000000">
              <CallIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
