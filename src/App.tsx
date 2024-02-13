import Header from "./components/Header";
import { lazy, useState } from "react";
import Detail from "./components/Details/Detail";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { InputFields } from "./utils/types";
import { api } from "./api/axios";
// import Voucher from "./components/Voucher";
const Voucher = lazy(() => import("./components/Voucher"));

function App() {
  const methods = useForm<InputFields>();
  const [data, setData] = useState<InputFields | null>(null);

  const handleSubmit: SubmitHandler<InputFields> = async (data) => {
    methods.unregister(["grand"]);
    console.log(data, "data");
    const response = await api.post("header/multiple", JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response, "response");
    if (response.data) {
      setData(data);
      methods.reset();
    }
  };
  return (
    <>
      {!data ? (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <Header />
            <Detail />
          </form>
        </FormProvider>
      ) : (
        <Voucher data={data} />
      )}
    </>
  );
}

export default App;
