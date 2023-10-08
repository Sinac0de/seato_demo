import { useState } from "react";
import LocationIcon from "src/assets/icons/LocationIcon";
import CallIcon from "src/assets/icons/CallIcon";
import ClockIcon from "src/assets/icons/ClockIcon";
import TextareaInput from "src/components/common/TextareaInput";
import InputComponent from "src/components/common/InputComponent";
import { useFormik } from "formik";

const onSubmit = () => {
  // submit form
};

const SalonDetail = ({ salon }) => {
  /* --- formik --- */
  const formik = useFormik({
    initialValues: {
      serviceFeedback: "",
    },
    onSubmit,
  });

  const [userRate, setUserRate] = useState(null);
  const [userName, setUserName] = useState("");
  const [userComment, setUserComment] = useState("");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userCommentChangeHandler = (event) => {
    setUserComment(event.target.value);
  };

  //! todo : move fetch to api module
  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    let id = salon.id;

    if (userName === "") {
      alert("نام نمیتواند خالی باشد!");
      return;
    }

    if (userComment === "") {
      alert("لطفا کامنت خود را وارد کنید!");
      return;
    }

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

  const starRatingHandle = (rate) => {
    setUserRate(rate);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between pt-16 relative bg-gradient-to-b from-[#FDDDD780] to-[#B6BCCB80] min-h-[60%] max-h-screen">
      {/* image */}
      <div className="lg:w-1/2">
        <div className="rounded-tl-[173px] absolute z-0 bg-gradient-to-b from-[#D3B5B0AB] to-[#8E94A224] w-[80%] lg:w-[40%] h-1/4 lg:h-full top-4 lg:top-0 right-0 ">
          {/* background canvas */}
        </div>
        <div className="h-full">
          {salon.photo_links && salon.photo_links.length > 0 && (
            <img
              src={salon.photo_links[0].url}
              alt="Salon"
              className="lg:h-full h-1/2 w-full object-cover object-center rounded-tl-[209px] relative z-10"
            />
          )}
        </div>
      </div>
      {/* details */}
      <div className="flex flex-col items-start px-10 gap-3 flex-1 p-10">
        <div className="border-b-[1px] border-black pb-5 flex-col flex gap-3">
          <h2 className="font-bold text-[36px]">{salon.name}</h2>
          <div className="flex gap-2 items-center">
            <LocationIcon />
            <p className="font-medium text-xl">{salon.address}</p>
          </div>
          <div className="flex gap-2 items-center">
            <CallIcon />
            <p className="font-medium text-xl">{salon.phone_number}</p>
          </div>
          <div className="flex gap-2 items-center">
            <ClockIcon />
            <p className="font-light text-lg">{salon.opens}</p>
          </div>
        </div>
        {/* comment form */}
        <form
          onSubmit={onSubmitFormHandler}
          className="flex flex-col items-end gap-2 lg:w-[74%] w-full"
        >
          <div className="w-full flex">
            <InputComponent
              onChange={userNameChangeHandler}
              id="name"
              value={formik.values.loginPass}
              touched={formik.touched}
              errors={formik.errors}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeHolder="نام و نام خانوادگی"
              type="text"
            />

            {/* star rating */}
            <div className=""></div>
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
