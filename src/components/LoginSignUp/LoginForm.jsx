import InputComponent from "src/components/common/InputComponent";
import CloseIcon from "../../assets/icons/CloseIcon";
import logoImg from "src/assets/images/seatoLogo.png";
import { useFormik } from "formik";
import { loginSchema } from "src/schemas/yupSchema";

const onSubmit = async (values, actions) => {
  console.log("isSubmitting");
  actions.resetForm();
};

const LoginForm = ({ setFormType, setShowModal }) => {
  const formik = useFormik({
    initialValues: {
      loginTel: "",
      loginPass: "",
    },
    validationSchema: loginSchema,
    validateOnMount: true,
    enableReinitialize: true,
    onSubmit,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="relative w-full flex-1 p-10 md:px-20 lg:px-24 mx-5 rounded-3xl flex flex-col gap-6 items-center bg-white bg-gradient-to-b from-[#FDDDD780] to-[#B6BCCB80] overflow-y-auto"
    >
      <header className="flex flex-col gap-4 items-center">
        <div
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          <CloseIcon />
        </div>

        <img src={logoImg} alt="seato logo" />
        <p className="font-medium text-base">صفحه ورود به اکانت سالن زیبایی</p>
      </header>

      <div className="flex flex-col gap-6 w-full">
        {/* input fields */}
        <div className="flex flex-col gap-2">
          <InputComponent
            id="loginTel"
            name="loginTel"
            type="tel"
            value={formik.values.loginTel}
            errors={formik.errors}
            touched={formik.touched}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeHolder="شماره موبایل"
          />

          <InputComponent
            id="loginPass"
            name="loginPass"
            type="password"
            value={formik.values.loginPass}
            touched={formik.touched}
            errors={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeHolder="رمز عبور"
          />
          <div className="flex gap-2 items-center">
            <span className="text-sm font-medium">ثبت نام نکرده اید؟</span>
            <button
              className="font-bold text-base"
              onClick={() => setFormType("sign-up")}
            >
              ثبت نام سالن
            </button>
          </div>
        </div>

        {/* footer */}
        <button
          disabled={formik.isSubmitting}
          type="submit"
          className="px-16 p-2 bg-[#E0BFB8] font-bold text-base rounded-full w-fit mx-auto disabled:opacity-50"
        >
          ورود
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
