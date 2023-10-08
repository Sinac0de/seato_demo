import { Fragment } from "react";

const InputComponent = ({
  type,
  id,
  value,
  errors,
  touched,
  placeHolder,
  onChange,
  onBlur,
}) => {
  return onChange ? (
    <input
      id={id}
      name={id}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      title={touched[id] ? errors[id] : ""}
      placeholder={placeHolder}
      className={`${
        touched[id] &&
        errors[id] &&
        "text-red-600 placeholder:text-red-600 border-red-500"
      } w-full p-3 rounded-[14px] shadow-md text-[#5A5A5A] outline-none border placeholder:text-[#5A5A5A] text-sm placeholder:text-sm placeholder:font-normal font-normal`}
    />
  ) : (
    <></>
  );
};

export default InputComponent;
