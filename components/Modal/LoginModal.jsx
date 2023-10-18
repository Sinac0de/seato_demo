import Modal from "./Modal";
import LoginForm from "../LoginSignUp/LoginForm";
import SignUpForm from "../LoginSignUp/SignUpForm";
import { useSelector } from "react-redux";

const LoginModal = () => {
  const modalType = useSelector((state) => state.modal.modalType);
  const isModalOpen = useSelector((state) => state.modal.isOpen);

  return modalType === "login" ? (
    //login
    <Modal isOpen={isModalOpen} isForm>
      <LoginForm />
    </Modal>
  ) : modalType === "sign-up" ? (
    //Sign up
    <Modal isOpen={isModalOpen} isForm>
      <SignUpForm />
    </Modal>
  ) : null;
};

export default LoginModal;
