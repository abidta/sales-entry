type Input = {
  label?: string;
  className?: string;
  value?: string | number;
  disabled?: boolean;
};
function Input({ label, className, value, disabled }: Input) {
  return (
    <div className="flex flex-row items-center ">
      {label && <label className="w-20"> {label}</label>}
      <input
        disabled={disabled}
        value={value}
        className={`${className} grow p-1 me-5  rounded-sm border border-slate-300`}
        type="text"
      />
    </div>
  );
}

export default Input;
