import { ConnectMethods, Input } from "../utils/types";
import ConnectForm from "./ConnectForm";

function Input({ className, disabled, value, name, remove, pattern }: Input) {
  function getValueByPath(obj, path) {
    return path.reduce((acc, key) => {
      console.log(acc, "acc");

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
                <input
                  {...register(name, {
                    required: "this field not be empty",
                    pattern: pattern,
                  })}
                  required
                  value={value??''}
                  disabled={disabled}
                  className={`${className} grow p-1 border border-black`}
                  type="text"
                />
              )}
              {errors && (
                <>
                  <div className="flex "><p className="absolute  z-10 ">
                    {getValueByPath(errors, name.split("."))?.message}
                  </p></div>
                </>
              )}
            </>
          );
        }}
      </ConnectForm>
    </>
  );
}

export default Input;
