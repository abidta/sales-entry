import Header from "./components/Header";
import Detail from "./components/Details/Detail";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { InputFields } from "./utils/types";
import { api } from "./api/axios";


function App() {
  const methods = useForm<InputFields>();
  const handleSubmit: SubmitHandler<InputFields> = async (data) => {
    methods.unregister(['grand'])
    console.log(data, "data");
    const response = await api.post("header/multiple", JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response, "response");
  };
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
