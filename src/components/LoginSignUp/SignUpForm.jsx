import InputComponent from "src/components/common/InputComponent";
import TextareaInput from "src/components/common/TextareaInput";
import CloseIcon from "../../assets/icons/CloseIcon";
import logoImg from "src/assets/images/seatoLogo.png";

const SignUpForm = ({ setFormType, setShowModal }) => {
  return (
    <form className="relative w-full p-5 rounded-3xl flex flex-col gap-6 items-center bg-white bg-gradient-to-b from-[#FDDDD780] to-[#B6BCCB80] overflow-y-auto px-10">
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
            id="sign-up-name"
            name="sign-up-name"
            type="text"
            placeHolder="نام سالن زیبایی"
          />

          <InputComponent
            id="sign-up-email"
            name="sign-up-email"
            type="email"
            placeHolder="ایمیل"
          />

          <InputComponent
            id="sign-up-tel"
            name="sign-up-tel"
            type="tel"
            placeHolder="شماره موبایل"
          />

          <InputComponent
            id="login-pass"
            name="login-pass"
            type="password"
            placeHolder="رمز عبور"
          />

          <TextareaInput
            id="sign-up-address"
            name="sign-up-address"
            placeHolder="آدرس"
          />
          <div className="flex gap-2 items-center">
            <span className="text-sm font-medium">قبلا ثبت نام کرده اید؟ </span>
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
          type="submit"
          className="px-16 p-2 bg-[#E0BFB8] font-bold text-base rounded-full w-fit mx-auto"
        >
          ثبت نام سالن زیبایی
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
