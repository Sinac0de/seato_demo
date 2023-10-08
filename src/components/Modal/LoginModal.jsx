import { useState } from "react";
import Modal from "./Modal";
import LoginForm from "../LoginSignUp/LoginForm";
import SignUpForm from "../LoginSignUp/SignUpForm";

const LoginModal = ({ defaultType }) => {
  const [formType, setFormType] = useState(defaultType);
  const [showModal, setShowModal] = useState(true);

  return formType === "login" ? (
    //login
    <Modal isOpen={showModal} isForm>
      <LoginForm setShowModal={setShowModal} setFormType={setFormType} />
    </Modal>
  ) : (
    //Sign up
    <Modal isOpen={showModal} isForm>
      <SignUpForm setShowModal={setShowModal} setFormType={setFormType} />
    </Modal>
  );
};

export default LoginModal;
