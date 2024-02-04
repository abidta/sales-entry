import { ReactNode } from "react";
import { UseFormReturn, useFormContext } from "react-hook-form";

type ConnectFormProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: (methods: UseFormReturn<any>) => ReactNode;
};
function ConnectForm({ children }: ConnectFormProps): ReactNode {
  const methods = useFormContext();
  return children({ ...methods });
}

export default ConnectForm;
