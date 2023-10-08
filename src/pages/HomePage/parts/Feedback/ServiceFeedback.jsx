import { useFormik } from "formik";
import checkSignImg from "src/assets/images/checksign.png";
import TextareaInput from "src/components/common/TextareaInput";

const onSubmit = () => {
  // submit
};

function ServiceFeedback() {
  /* --- formik --- */
  const formik = useFormik({
    initialValues: {
      serviceFeedback: "",
    },
    onSubmit,
  });

  return (
    <div className="bg-[#DADBDC9C] w-full lg:w-1/2 max-w-[612px] p-10 rounded-[28px] relative">
      <div className="flex flex-col items-end">
        <div className="flex flex-col gap-2 w-full">
          <h2 className="md:text-[22px] text-xl font-bold">
            چه خدماتی را دوست دارید در سیتو اضافه کنیم؟
          </h2>
          <p className="font-normal md:text-xl text-base">
            از چیزهایی که نیاز دارید برای ما بنویسید
          </p>
        </div>
        {/* form */}
        <form className="flex flex-col gap-3 items-end w-full lg:w-3/5 mt-3">
          <TextareaInput
            id="serviceFeedback"
            name="serviceFeedback"
            value={formik.values.serviceFeedback}
            errors={formik.errors}
            touched={formik.touched}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeHolder="پیشنهادات و انتقادات خود را اینجا بنویسید"
          />
          <button
            type="button"
            className="bg-[#E0BFB8] font-bold md:text-base text-xs p-3 px-8 rounded-full w-fit"
          >
            ارسال پیشنهاد
          </button>
        </form>
      </div>
      {/* image */}
      <img
        src={checkSignImg}
        alt="Check sign"
        className="absolute bottom-0 lg:top-44 -right-7 lg:-right-10 md:-right-16 w-[80px] md:-bottom-10 md:w-[150px] lg:w-fit"
      />
    </div>
  );
}

export default ServiceFeedback;
