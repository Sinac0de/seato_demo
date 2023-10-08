import InputComponent from "src/components/common/InputComponent";
import TextareaInput from "src/components/common/TextareaInput";
import CloseIcon from "src/assets/icons/CloseIcon";
import logoImg from "src/assets/images/seatoLogo.png";
import { signUpSchema } from "src/schemas/yupSchema";
import { useFormik } from "formik";

const onSubmit = async (values, actions) => {
  console.log("isSubmitting");
  actions.resetForm();
};

const SignUpForm = ({ setFormType, setShowModal }) => {
  const formik = useFormik({
    initialValues: {
      signUpName: "",
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
            onClick={() => setShowModal(false)}
          >
            <CloseIcon />
          </div>
          <img src={logoImg} alt="seato logo" />
          <p className="font-medium text-base">فرم ثبت نام اولیه سالن زیبایی</p>
        </header>

        <div className="flex flex-col gap-6 w-full">
          {/* input fields */}
          <div className="flex flex-col gap-2">
            <InputComponent
              id="signUpName"
              name="signUpName"
              type="text"
              value={formik.values.name}
              errors={formik.errors}
              touched={formik.touched}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeHolder="نام سالن زیبایی"
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

            <TextareaInput
              id="signUpAddress"
              name="signUpAddress"
              value={formik.values.address}
              errors={formik.errors}
              touched={formik.touched}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeHolder="آدرس"
            />
            <div className="flex gap-2 items-center">
              <span className="text-sm font-medium">
                قبلا ثبت نام کرده اید؟{" "}
              </span>
              <button
                type="button"
                className="font-bold text-base"
                onClick={() => setFormType("login")}
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
            ثبت نام سالن زیبایی
          </button>
        </div>
      </form>
    )
  );
};

export default SignUpForm;
