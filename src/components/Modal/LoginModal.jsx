import { useState } from "react";
import Modal from "./Modal";
import LoginForm from "../LoginSignUp/LoginForm";
import SignUpForm from "../LoginSignUp/SignUpForm";

const LoginModal = ({ defaultType }) => {
  const [formType, setFormType] = useState(defaultType);
  const [showModal, setShowModal] = useState(true);

  return (
    <Modal isOpen={showModal} isForm>
      {formType === "login" ? (
        //login
        <LoginForm setShowModal={setShowModal} setFormType={setFormType} />
      ) : (
        //Sign up
        <SignUpForm setShowModal={setShowModal} setFormType={setFormType} />
      )}
    </Modal>
  );
};

export default LoginModal;
