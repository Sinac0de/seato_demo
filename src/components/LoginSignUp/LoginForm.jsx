import InputComponent from "src/components/common/InputComponent";
import CloseIcon from "../../assets/icons/CloseIcon";
import logoImg from "src/assets/images/seatoLogo.png";

const LoginForm = ({ setFormType, setShowModal }) => {
  return (
    <form className="relative w-full flex-1 p-10 md:px-20 lg:px-24 mx-5 rounded-3xl flex flex-col gap-6 items-center bg-white bg-gradient-to-b from-[#FDDDD780] to-[#B6BCCB80] overflow-y-auto">
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
            id="login-tel"
            name="login-tel"
            type="tel"
            placeHolder="شماره موبایل"
          />

          <InputComponent
            id="login-pass"
            name="login-pass"
            type="password"
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
          type="submit"
          className="px-16 p-2 bg-[#E0BFB8] font-bold text-base rounded-full w-fit mx-auto"
        >
          ورود
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
