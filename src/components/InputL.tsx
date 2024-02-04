import { InputL } from "../utils/types";
import Input from "./Input";

function InputL({ label, className, defaultValue, disabled, name }: InputL) {
  return (
    <div className="flex flex-row items-center ">
      {label && <label className="w-20"> {label}</label>}
      <Input
        name={name}
        className={className}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </div>
  );
}

export default InputL;
