import Header from "./components/Header";
import { Suspense, lazy, useEffect, useState } from "react";
import Detail from "./components/Details/Detail";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { InputFields } from "./utils/types";
import { api } from "./api/axios";
import Button from "./components/Button";
import { useAppDispatch } from "./hooks/redux";
import { resetField } from "./redux/amount";
import ErrorToast from "./components/ErrorToast";
import { AxiosError } from "axios";
import Loader from "./components/Loader";
// import Voucher from "./components/Voucher";
const Voucher = lazy(() => import("./components/Voucher"));

function App() {
  const methods = useForm<InputFields>();
  const [data, setData] = useState<InputFields | null>(null);
  const [err, setErr] = useState<null | AxiosError>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const handleSubmit: SubmitHandler<InputFields> = async (data) => {
    try {
      console.log(data, "data");
      setLoading(true);
      const response = await api.post("header/multiple", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response, "response");
      if (response.data) {
        setLoading(false);
        setData(data);
        methods.reset();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErr(error as AxiosError);
      setTimeout(() => {
        setErr(null);
      }, 5000);
    }
  };

  useEffect(() => {
    methods.reset();
    return () => {};
  }, [data]);

  return (
    <>
      {err && (
        <>
          <ErrorToast message={err.message} />
        </>
      )}
      {loading && (
        <>
          <Loader />
        </>
      )}
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
