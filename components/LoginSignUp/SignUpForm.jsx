import InputComponent from "@/components/common/InputComponent";
import CloseIcon from "@/components/icons/CloseIcon";
import { signUpSchema } from "@/schemas/yupSchema";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { closeModal } from "@/features/Modal/ModalSlice";
import { openModal } from "@/features/Modal/ModalSlice";

const onSubmit = async (values, actions) => {
  console.log("isSubmitting");
  actions.resetForm();
};

const SignUpForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      signUpFName: "",
      signUpLName: "",
      signUpEmail: "",
      signUpTel: "",
      signUpPass: "",
      signUpAddress: "",
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  return (
    formik && (
      <form
        onSubmit={formik.handleSubmit}
        className="relative w-full p-5 rounded-3xl flex flex-col gap-6 items-center bg-white bg-gradient-to-b from-[#FDDDD780] to-[#B6BCCB80] overflow-y-auto px-10"
      >
        <header className="flex flex-col gap-4 items-center">
          <div
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => dispatch(closeModal("sign-up"))}
          >
            <CloseIcon />
          </div>
          <img src="seatoLogo.png" alt="seato logo" />
          <p className="font-medium text-base">فرم ثبت‌نام کاربر جدید</p>
        </header>

        <div className="flex flex-col gap-6 w-full">
          {/* input fields */}
          <div className="flex flex-col gap-2">
            <InputComponent
              id="signUpFName"
              name="signUpFName"
              type="text"
              value={formik.values.name}
              errors={formik.errors}
              touched={formik.touched}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeHolder="نام"
            />

            <InputComponent
              id="signUpLName"
              name="signUpLName"
              type="text"
              value={formik.values.name}
              errors={formik.errors}
              touched={formik.touched}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeHolder="نام‌خانوادگی"
            />

            <InputComponent
              id="signUpTel"
              name="signUpTel"
              type="tel"
              value={formik.values.tel}
              errors={formik.errors}
              touched={formik.touched}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeHolder="شماره موبایل"
            />

            <InputComponent
              id="signUpEmail"
              name="signUpEmail"
              type="email"
              value={formik.values.email}
              errors={formik.errors}
              touched={formik.touched}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeHolder="ایمیل"
            />

            <InputComponent
              id="signUpPass"
              name="signUpPass"
              type="password"
              value={formik.values.password}
              errors={formik.errors}
              touched={formik.touched}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeHolder="رمز عبور"
            />

            <div className="flex gap-2 items-center px-2">
              <label htmlFor="isStylist">آیا استایلیست هستید؟</label>
              <input type="checkbox" id="isStylist" name="isStylist" />
            </div>

            <div className="flex gap-2 items-center">
              <span className="text-sm font-medium">
                قبلا ثبت نام کرده اید؟
              </span>
              <button
                type="button"
                className="font-bold text-base"
                onClick={() => dispatch(openModal("login"))}
              >
                ورود
              </button>
            </div>
          </div>

          {/* footer */}
          <button
            disabled={formik.isSubmitting}
            type="submit"
            className="px-16 p-2 bg-[#E0BFB8] font-bold text-base rounded-full w-fit mx-auto disabled:opacity-50"
          >
            ثبت‌نام
          </button>
        </div>
      </form>
    )
  );
};

export default SignUpForm;
