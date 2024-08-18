
function Input({ type, name, placeholder, extraStyle }) {
  return (
    <input
      type={type}
      name={name}
      required
      autoComplete="off"
      placeholder={placeholder}
      className={`text-medium focus:border-[#2D88D4] duration-300 placeholder:text-[14px] placeholder:text-[#8A8A8A] leading-[17px] placeholder:font-medium p-[13px] border-[0.5px] border-[#A7A7A7] rounded-[4px] outline-none w-[248px] ${extraStyle}`}
    />
  );
}

export default Input;
