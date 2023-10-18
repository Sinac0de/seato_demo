import HeroIcon from "@/components/icons/HeroIcon";
import SeatoPerLogo from "@/components/icons/SeatoPerLogo";
import { Button, Input, Typography } from "@material-tailwind/react";

const Intro = () => {
  return (
    <div className="max-h-[70%] pt-14 bg-gradient-to-b from-[#FDDDD780] to-[#B6BCCB80]">
      <div className="flex flex-col lg:flex-row gap-2 justify-around px-5 mx-auto">
        {/* image */}
        <div className="image-container lg:w-1/2 w-fit h-fit relative order-2 lg:order-1 mx-auto lg:m">
          {/* back gradient shape */}
          <div className="absolute z-0 bg-gradient-to-b rounded-tl-[120px] md:rounded-tl-[153px] lg:rounded-tl-[173px] from-[#D3B5B0AB] to-[#8E94A224] w-[72%] h-[90%] bottom-0 left-0"></div>
          <img src="HeroImage.png" alt="Hero" className="relative z-0 my-3" />
        </div>
        {/* Hero text */}
        <div className="flex flex-col gap-10 lg:w-1/2 pt-6 order-1 mb-5">
          <div className="px-3 lg:px-10 flex flex-col lg:h-1/3 lg:top-0  relative gap-10">
            <Typography className="font-bold text-xl lg:text-3xl text-center lg:text-right">
              سالن زیباییت رو راحت انتخاب کن!
            </Typography>
            <Typography className="font-medium text-lg lg:text-xl">
              با چند تا کلیک میتونی در کوتاه ترین زمان سالنی که میخوای رو رزرو
              کنی و یا درباره سالن نظرتو برامون بنویسی.
            </Typography>
            {/* Search input */}
            <div className="flex justify-between gap-3 w-full mx-auto">
              <input
                type="search"
                placeholder="جستجوی نام سالن"
                className="p-3 rounded-full w-5/6 outline-none focus:ring focus:ring-[#E0BFB8] text-xs lg:text-lg placeholder:text-xs lg:placeholder:text-lg"
              />
              <Button className="shadow-none hover:shadow-none rounded-full bg-[#E0BFB8] text-black flex items-center justify-center lg:text-lg text-xs w-1/6 flex-1">
                جستجو
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
