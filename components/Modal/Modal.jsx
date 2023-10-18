import ReactModal from "react-modal";

const Modal = ({ isOpen, children, isForm }) => {
  let formStyles = null;
  if (isForm) {
    formStyles = {
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        zIndex: 30,
      },
      content: {
        display: "flex",
        position: "absolute",
        left: "0",
        right: "0",
        margin: "auto",
        maxWidth: "490px",
        width: "90%",
        height: "fit-content",
        border: "none",
        backgroundColor: "transparent",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "28px",
        zIndex: 31,
        outline: "none",
        padding: "0em",
      },
    };
  }

  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={200}
      contentLabel="Modal"
      ariaHideApp={false}
      style={
        formStyles || {
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 30,
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
            zIndex: 31,
          },
        }
      }
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
