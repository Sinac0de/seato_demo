import Link from "next/link";
import { motion } from "framer-motion";

const Card = ({ onClick, salon }) => {
  let star = 0;
  if (salon.rating) {
    star = salon.rating;
  }
  return (
    <Link href={`/salons/${salon.id}`}>
      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#FFE7E2] p-3 flex flex-col gap-3 rounded-[28px] h-full hover:shadow transition-shadow"
      >
        {/* image */}
        <div className="relative flex justify-center">
          <img
            className="rounded-[20px] w-full h-[239px] object-cover"
            src={salon.photo?.url || "salon-placeholder-bg.jpg"}
            alt="Salon"
          />
          {!salon.photo && (
            <div className="absolute top-0 w-full h-full flex items-center justify-center">
              <h4 className="text-white text-2xl font-bold">بدون عکس</h4>
            </div>
          )}
        </div>
        {/* card body */}
        <div className="flex flex-col justify-between h-full gap-2">
          {/* title */}
          <div>
            <h4 className="font-medium text-xl text-center">
              {salon.name.replace(/['"]+/g, "")}
            </h4>
          </div>
          {/* footer */}
          <div className="flex items-end">
            <span className="w-5/6">{salon.address.replace(/['"]+/g, "")}</span>
            {/* ratings */}
            <div className="flex max-w-10 gap-1">
              <span className="">{star.toFixed(1)}</span>
              <span className="">
                <img
                  src="/yellowStar.png"
                  className="object-contain"
                  width="17px"
                  height="17px"
                />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
