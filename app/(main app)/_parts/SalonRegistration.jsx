"use client";

import { useState } from "react";
import ReactModal from "react-modal";

const ModalForm = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    alert("سالن ثبت شد!\nنتیجه تاییدیه از طریق ایمیل به شما اعلام می‌شود");
    onClose();
  };

  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="Minimal Modal Example"
      ariaHideApp={false}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
        },
        content: {
          display: "flex",
          position: "absolute",
          left: "0",
          right: "0",
          margin: "0 auto",
          top: "40%",
          width: "fit-content",
          height: "fit-content",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "28px",
          outline: "none",
          padding: "4em",
        },
      }}
    >
      <div>
        <div>
          <div>
            <img src="/logobig.png" alt="Seato logo" />
          </div>
          {/* <div className={classes["modal-caption"]}> */}
          <div>
            <p>فرم ثبت اولیه سالن زیبایی</p>
          </div>
        </div>
        <form onSubmit={formSubmitHandler}>
          {/* <div className={classes["modal-form-inputs"]}> */}
          <div>
            <input placeholder="نام سالن زیبایی" />
            <input placeholder="شماره تماس" />
            <input placeholder="آدرس" />
          </div>
          {/* <div className={classes["modal-form-action"]}> */}
          <div>
            <button>ثبت سالن زیبایی</button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};

function SalonRegistration() {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };

  return (
    <div className="flex flex-col lg:flex-row h-[443px] bg-[#DADBDC9C]">
      <ModalForm />
      <div className="w-full h-1/2 lg:h-full lg:w-1/2">
        <img
          src="/salon-beleza.png"
          alt="Stylish beauty salon"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center p-5 px-10 gap-5 lg:w-1/2 h-full lg:p-10 lg:px-14">
        <h1 className="font-bold lg:text-[24px] text-xl">
          اگر شما مالک سالن زیبایی هستید؛ سالن زیبایی خود را در کمترین زمان ثبت
          کنید!
        </h1>

        <div className="flex justify-end w-full">
          <button
            onClick={showModalHandler}
            className="font-bold lg:text-base text-xs bg-[#E0BFB8] px-8 p-3 rounded-full"
          >
            ثبت سالن زیبایی
          </button>
        </div>
      </div>
    </div>
  );
}

export default SalonRegistration;
