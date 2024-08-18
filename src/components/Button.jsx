function Button({ title, extraStyle, type }) {
  return (
    <button
      type={type}
      className={`border-[2px] border-transparent duration-300 hover:text-[#2D88D4] hover:bg-white hover:border-[#2D88D4] text-[14px] leading-[17px] text-white font-bold bg-[#2D88D4] rounded-[4px] w-[248px] py-[12px] ${extraStyle}`}
    >
      {title}
    </button>
  );
}

export default Button;
