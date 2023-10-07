import handImgUrl from "src/assets/images/handhome.png";
import bigLogoUrl from "src/assets/images/logobig.png";
import seatoPersianLogo from "src/assets/images/seatoPer.png";
const Intro = () => {
  return (
    <div className="max-h-1/3 pt-14 bg-gradient-to-b from-[#FDDDD780] to-[#B6BCCB80]">
      <div className="flex flex-col lg:flex-row gap-2 justify-around px-10 mx-auto">
        {/* image */}
        <div className="image-container w-fit h-fit relative order-2 lg:order-1 mx-auto lg:mx-0">
          <img src={handImgUrl} alt="Stylish nails" className="relative z-10" />
          {/* back gradient shape */}
          <div className="absolute z-0 bg-gradient-to-b rounded-tl-[120px] md:rounded-tl-[153px] lg:rounded-tl-[173px] from-[#D3B5B0AB] to-[#8E94A224] w-[72%] h-[95%] bottom-0 left-0"></div>
        </div>
        {/* logo and text */}
        <div className="flex flex-col gap-10 lg:w-1/2 order-1">
          {/* logo */}
          <div className="lg:flex items-end hidden">
            <img className="lg:w-1/2" src={bigLogoUrl} alt="Seato logo" />
            <img
              className="object-contain w-1/5"
              src={seatoPersianLogo}
              alt="Persian logo of Seato"
            />
          </div>
          <div className="px-10 flex flex-col gap-10">
            <h3 className="text-xl font-light">
              سیتو یک پلتفرم نظر سنجی و کیفیت و اعتبار دهی به سالن های زیبایی می
              باشد
            </h3>
            <div className="flex justify-end">
              <button className="bg-[#E0BFB8] p-3 rounded-full px-10 lg:px-14 w-fit font-semibold text-xs md:text-base">
                ثبت نظر
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
