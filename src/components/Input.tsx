import { ConnectMethods, Input, InputFields } from "../utils/types";
import ConnectForm from "./ConnectForm";
import Error from "./Error";
import { FieldErrors } from "react-hook-form";

function Input({
  className,
  disabled,
  value,
  name,
  remove,
  pattern,
  message,
}: Input) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getValueByPath(obj: FieldErrors<InputFields>, path: any[] = []) {
    return path?.reduce((acc, key) => {
      return acc?.[key];
    }, obj);
  }

  return (
    <>
      <ConnectForm>
        {({ register, formState: { errors } }: ConnectMethods) => {
          return (
            <>
              {!remove && (
                <>
                  {name ? (
                    <input
                      {...register(name, {
                        required: "this field not be empty",
                        pattern: {
                          value: pattern as RegExp,
                          message: message as string,
                        },
                      })}
                      required
                      value={value}
                      disabled={disabled}
                      className={`${className} grow p-1 border border-black`}
                      type="text"
                    />
                  ) : (
                    <input
                      value={value || ""}
                      readOnly
                      className={`${className} grow p-1 border border-black`}
                      type="text"
                    />
                  )}
                </>
              )}
              {getValueByPath(errors, name?.split("."))?.message && (
                <Error
                  message={getValueByPath(errors, name?.split("."))?.message}
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
