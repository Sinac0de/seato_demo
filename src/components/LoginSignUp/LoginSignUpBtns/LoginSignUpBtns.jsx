import { Fragment } from "react";
import LoginModal from "src/components/Modal/LoginModal";

const LoginSignUpBtns = ({ isSidebar, setIsNavCollapsed }) => {
  const handleShowModal = () => {};
  return isSidebar ? (
    <Fragment>
      <button
        onClick={() => handleShowModal("login")}
        className="bg-[#f9b3ff] text-black text-center rounded-full text-base p-3 px-8"
      >
        ورود
      </button>
      <button
        onClick={() => handleShowModal("sign-up")}
        className="text-[#222222] text-base bg-[#fed5ff] rounded-full p-3 px-8 shadow-sm"
      >
        ثبت نام
      </button>
    </Fragment>
  ) : (
    <Fragment>
      <button
        className="text-[#4B4B4B] text-[15px]"
        onClick={() => handleShowModal("login")}
      >
        ورود
      </button>
      <button
        onClick={() => handleShowModal("sign-up")}
        className="text-[#222222] text-base bg-white rounded-full p-3 px-8 shadow-sm"
      >
        ثبت نام
      </button>
    </Fragment>
  );
};

export default LoginSignUpBtns;
