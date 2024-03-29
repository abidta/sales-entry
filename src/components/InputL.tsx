import { InputL } from "../utils/types";
import Input from "./Input";

function InputL({
  label,
  className,
  value,
  disabled,
  name,
  pattern,
  message,
}: InputL) {
  return (
    <div className="flex flex-row items-center relative ">
      {label && <label className="w-20"> {label}</label>}
      <Input
        name={name}
        className={className}
        value={value}
        disabled={disabled}
        pattern={pattern}
        message={message}
      />
    </div>
  );
}

export default InputL;
