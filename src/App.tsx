import Header from "./components/Header";
import { Suspense, lazy, useEffect, useState } from "react";
import Detail from "./components/Details/Detail";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { InputFields } from "./utils/types";
import { api } from "./api/axios";
import Button from "./components/Button";
import { useAppDispatch } from "./hooks/redux";
import { resetField } from "./redux/amount";
// import Voucher from "./components/Voucher";
const Voucher = lazy(() => import("./components/Voucher"));

function App() {
  const methods = useForm<InputFields>();
  const [data, setData] = useState<InputFields | null>(null);
  const dispatch = useAppDispatch();
  const handleSubmit: SubmitHandler<InputFields> = async (data) => {
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
  useEffect(() => {
    methods.reset();
    return () => {};
  }, [data]);

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
        <>
          <Suspense>
            <Button
              type="button"
              onClick={() => {
                setData(null);
                dispatch(resetField());
              }}
            >
              Close
            </Button>
            <Voucher data={data} />
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;
