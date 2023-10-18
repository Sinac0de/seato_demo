import { Fragment } from "react";

const TextareaInput = ({
  id,
  name,
  errors,
  touched,
  value,
  onBlur,
  placeHolder,
  onChange,
}) => {
  return (
    <Fragment>
      <textarea
        id={id}
        name={name}
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        title={touched[id] ? errors[id] : ""}
        className={`${
          touched[id] &&
          errors[id] &&
          "text-red-600 placeholder:text-red-600 border-red-500"
        } w-full p-3 rounded-[14px] shadow-md outline-none border text-[#5A5A5A] placeholder:text-[#5A5A5A]/60 text-sm placeholder:text-sm placeholder:font-normal font-normal`}
        rows={6}
      ></textarea>
    </Fragment>
  );
};

export default TextareaInput;
