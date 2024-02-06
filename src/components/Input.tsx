import { ConnectMethods, Input } from "../utils/types";
import ConnectForm from "./ConectForm";


function Input({ className, disabled, defaultValue, name, remove }: Input) {
  return (
    <>
      <ConnectForm>
        {({ register }: ConnectMethods) => {
          return (
            <>
              {!remove && (
                <input
                  {...register(name)}
                  disabled={disabled}
                  value={defaultValue}
                  className={`${className} grow p-1 border border-black`}
                  type="text"
                />
              )}
            </>
          );
        }}
      </ConnectForm>
    </>
  );
}

export default Input;
