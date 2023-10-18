import { useFormik } from "formik";
import InputComponent from "components/common/InputComponent";
import { supportSchema } from "@/schemas/yupSchema";

const onSubmit = () => {
  //submit form
};

function SupportForm() {
  /* --- formik --- */
  const formik = useFormik({
    initialValues: {
      supportFullName: "",
      supportTel: "",
      supportEmail: "",
    },
    onSubmit,
    validationSchema: supportSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="bg-[#DADBDC9C] w-full lg:w-1/2 max-w-[612px] p-10 rounded-[28px] relative">
      <div className="flex flex-col items-end">
        <div className="flex flex-col gap-2">
          <h2 className="md:text-[22px] text-xl font-bold">
            مشاوره و پشتیبانی از سیتو
          </h2>
          <p className="font-normal md:text-xl text-base">
            در صورتی که نیاز به پشتیبانی دارید فرم زیر را پر کنید
          </p>
        </div>
        <form className="relative z-10 flex flex-col gap-3 items-end w-full lg:w-3/5 mt-3">
          <InputComponent
            id="supportFullName"
            value={formik.values.supportFullName}
            touched={formik.touched}
            errors={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeHolder="نام و نام خانوادگی"
            type="text"
          />
          <InputComponent
            id="supportTel"
            value={formik.values.supportTel}
            touched={formik.touched}
            errors={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeHolder="شماره موبایل"
            type="tel"
          />
          <InputComponent
            id="supportEmail"
            value={formik.values.supportEmail}
            touched={formik.touched}
            errors={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeHolder="ایمیل"
            type="email"
          />
          <button className="bg-[#E0BFB8] font-bold text-xs md:text-base p-3 px-8 rounded-full w-fit">
            درخواست پشتیبانی
          </button>
        </form>
      </div>
      {/* image */}
      <img
        src="/support.png"
        alt="Support staff"
        className="absolute lg:top-24 -right-16 md:-right-28 lg:-right-24 -bottom-4 z-0 w-[150px] md:w-[200px] lg:w-fit"
      />
    </div>
  );
}

export default SupportForm;
