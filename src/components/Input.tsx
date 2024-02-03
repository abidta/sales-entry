import { Input } from "../utils/types";

function Input({ className, disabled, defaultValue }: Input) {
  return (
    <>
      <input
        disabled={disabled}
        defaultValue={defaultValue}
        className={`${className} grow p-1 border border-black`}
        type="text"
      />
    </>
  );
}

export default Input;
