import Header from "./components/Header";
import Detail from "./components/Details/Detail";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { InputFields } from "./utils/types";

const handleSubmit: SubmitHandler<InputFields> = (data) => {
  console.log(data, "data");
};
function App() {
  const methods = useForm<InputFields>();

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <Header />
          <Detail />
        </form>
      </FormProvider>
    </>
  );
}

export default App;
