import { Input, InputFields } from "../utils/types";
import { UseFormRegister } from "react-hook-form";
import ConnectForm from "./ConectForm";

function Input({ className, disabled, defaultValue, name }: Input) {
  return (
    <>
      <ConnectForm>
        {({ register }: { register: UseFormRegister<InputFields> }) => (
          <input
            {...register(name)}
            disabled={disabled}
            defaultValue={defaultValue}
            className={`${className} grow p-1 border border-black`}
            type="text"
          />
        )}
      </ConnectForm>
    </>
  );
}

export default Input;
