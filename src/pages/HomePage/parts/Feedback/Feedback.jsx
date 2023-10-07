import ServiceFeedback from "./ServiceFeedback";
import SupportForm from "./SupportForm";

const Feedback = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around my-10 mb-20  gap-10 px-10 items-center">
      <ServiceFeedback />
      <SupportForm />
    </div>
  );
};

export default Feedback;
