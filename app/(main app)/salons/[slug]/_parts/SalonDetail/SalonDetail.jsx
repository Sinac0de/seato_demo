import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillClockFill } from "react-icons/bs";
import TextareaInput from "@/components/common/TextareaInput";
import InputComponent from "@/components/common/InputComponent";
import { useFormik } from "formik";
import { IconContext } from "react-icons";
import ReactStars from "react-rating-stars-component";

const onSubmit = () => {
  // submit form
};

const SalonDetail = ({ salon }) => {
  const [userRate, setUserRate] = useState(null);

  /* --- formik --- */
  const formik = useFormik({
    initialValues: {
      serviceFeedback: "",
    },
    onSubmit,
  });

  /* --- Handlers --- */

  //! todo : move fetch to api module
  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    let id = salon.id;

    if (userRate) {
      fetch("http://seato1.ir/api/rates/", {
        method: "POST",
        body: JSON.stringify({
          salon: id,
          rate: userRate,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then();
    }

    fetch("http://seato1.ir/api/comments/", {
      method: "POST",
      body: JSON.stringify({
        salon: id,
        comment: userComment,
        name: userName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          // refresh comments
          window.location.reload(false);
        } else {
          throw new Error("Somethin went wrong!\nTry with correct form."); // generate appropriate errors
        }
      })
      .catch((err) => {
        // alert(err.message);
      });
  };

  const ratingHandler = (rating) => {
    setUserRate(rating);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between pt-16 relative bg-gradient-to-b from-[#FDDDD780] to-[#B6BCCB80] min-h-[60%] lg:max-h-screen">
      {/* image */}
      <div className="lg:w-1/2 lg:max-h-[600px] overflow-hidden">
        <div className="rounded-tl-[173px] absolute z-0 bg-gradient-to-b from-[#D3B5B0AB] to-[#8E94A224] w-[80%] lg:w-[40%] h-1/4 lg:h-full top-4 lg:top-0 right-0 ">
          {/* background canvas */}
        </div>
        <div className="h-full">
          {salon.photo_links && salon.photo_links.length > 0 && (
            <img
              src={salon.photo_links[0].url}
              alt="Salon"
              className="lg:h-full max-h-[300px] lg:max-h-max w-full object-cover object-center rounded-tl-[209px] relative z-10"
            />
          )}
        </div>
      </div>
      {/* details */}
      <div className="flex flex-col items-start px-10 gap-3 flex-1 p-10">
        <div className="pb-5 flex-col flex gap-3">
          <h2 className="font-bold text-xl lg:text-[36px] mb-3">
            {salon.name}
          </h2>
          <div className="flex gap-2 items-center">
            <IconContext.Provider value={{ size: "24px", color: "#C69C93" }}>
              <FaLocationDot />
            </IconContext.Provider>
            <p className="font-medium text-sm md:text-base lg:text-xl">
              {salon.address}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <IconContext.Provider value={{ size: "24px", color: "#C69C93" }}>
              <BiSolidPhoneCall />
            </IconContext.Provider>
            <p className="font-medium text-sm md:text-base lg:text-xl">
              {salon.phone_number}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <IconContext.Provider value={{ size: "22px", color: "#C69C93" }}>
              <BsFillClockFill />
            </IconContext.Provider>
            <p className="font-light text-sm md:text-base lg:text-xl">
              {salon.opens}
            </p>
          </div>
        </div>
        {/* comment form */}
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-end gap-2 lg:w-[74%] w-full pt-2 border-t-[1px] border-black  "
        >
          <div className="w-full flex items-center gap-3 flex-wrap">
            <div className="w-full lg:w-1/2 order-2">
              <InputComponent
                id="name"
                value={formik.values.loginPass}
                touched={formik.touched}
                errors={formik.errors}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeHolder="نام و نام خانوادگی"
                type="text"
              />
            </div>

            {/* Rating Stars */}
            <div className="lg:order-2 border-none">
              <ReactStars
                count={5}
                onChange={ratingHandler}
                size={45}
                activeColor="#ffd700"
              />
            </div>
          </div>
          <TextareaInput
            id="Experience"
            value={formik.values.loginPass}
            touched={formik.touched}
            errors={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // onChange={userCommentChangeHandler}
            placeHolder="تجربه خود را درباره این سالن اینجا بنویسید"
          />
          <button
            className="bg-[#E0BFB8] p-3 rounded-full px-10 lg:px-14 w-fit font-semibold text-xs md:text-base"
            onClick={onSubmitFormHandler}
          >
            ثبت نظر
          </button>
        </form>
      </div>
    </div>
  );
};

export default SalonDetail;
