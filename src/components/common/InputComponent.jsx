const InputComponent = ({ type, id, placeHolder, onChange }) => {
  return (
    <input
      id={id}
      name={id}
      type={type}
      onChange={onChange}
      placeholder={placeHolder}
      className="w-full p-3 rounded-[14px] shadow-md text-[#5A5A5A]placeholder:text-[#5A5A5A] text-sm placeholder:text-sm placeholder:font-normal font-normal"
    />
  );
};

export default InputComponent;
