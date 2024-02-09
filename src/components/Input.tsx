import { ConnectMethods, Input } from "../utils/types";
import ConnectForm from "./ConnectForm";

function Input({ className, disabled, defaultValue, name, remove }: Input) {
  return (
    <>
      <ConnectForm>
        {({ register, formState: { errors } }: ConnectMethods) => {
          return (
            <>
              {!remove && (
                <input
                  {...register(name, { required: "this field not be empty" })}
                  disabled={disabled}
                  value={defaultValue}
                  className={`${className} grow p-1 border border-black`}
                  type="text"
                />
              )}
              {errors && <></>}
            </>
          );
        }}
      </ConnectForm>
    </>
  );
}

export default Input;
