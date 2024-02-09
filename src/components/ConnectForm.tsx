import { ReactNode } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ConnectMethods } from "../utils/types";
// eslint-disable-next-line @typescript-eslint/no-explicit-any

type ConnectFormProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: (methods: ConnectMethods) => ReactNode;
};
function ConnectForm({ children }: ConnectFormProps): ReactNode {
  const methods = useFormContext();

  const { remove } = useFieldArray({
    name: "detail_table",
    control: methods.control,
  });

  return children({ ...methods, remove });
}

export default ConnectForm;
