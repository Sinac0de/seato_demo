const TextareaInput = ({ id, name, placeHolder, onChange }) => {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeHolder}
      onChange={onChange}
      className="w-full p-3 rounded-[14px] shadow-md text-[#5A5A5A]placeholder:text-[#5A5A5A] text-sm placeholder:text-sm placeholder:font-normal font-normal"
      rows={6}
    ></textarea>
  );
};

export default TextareaInput;
