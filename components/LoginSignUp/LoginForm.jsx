import InputComponent from "@/components/common/InputComponent";
import CloseIcon from "@/components/icons/CloseIcon";
import { useFormik } from "formik";
import { loginSchema } from "@/schemas/yupSchema";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "@/features/Modal/ModalSlice";

const onSubmit = async (values, actions) => {
  console.log("isSubmitting");
  actions.resetForm();
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      loginEmail: "",
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
      className="relative w-full p-5 rounded-3xl flex flex-col gap-6 items-center bg-white bg-gradient-to-b from-[#FDDDD780] to-[#B6BCCB80] overflow-y-auto px-10"
    >
      <header className="flex flex-col gap-4 items-center">
        <div
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => dispatch(closeModal("login"))}
        >
          <CloseIcon />
        </div>

        <img src="seatoLogo.png" alt="seato logo" />
        <p className="font-medium text-base">فرم ورود کاربر</p>
      </header>

      <div className="flex flex-col gap-6 w-full">
        {/* input fields */}
        <div className="flex flex-col gap-2">
          <InputComponent
            id="loginEmail"
            name="loginEmail"
            type="email"
            value={formik.values.loginEmail}
            errors={formik.errors}
            touched={formik.touched}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeHolder="ایمیل"
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
              type="button"
              className="font-bold text-base"
              onClick={() => dispatch(openModal("sign-up"))}
            >
              ثبت‌نام
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
