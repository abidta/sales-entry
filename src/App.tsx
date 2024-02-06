import Header from "./components/Header";
import Detail from "./components/Details/Detail";
import { FormProvider, useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { InputFields } from "./utils/types";
import { useEffect } from "react";

const handleSubmit: SubmitHandler<InputFields> = (data) => {
  console.log(data, "data");
};
function App() {
  const methods = useForm<InputFields>();
 
  useEffect(() => {
    console.log('app');
    
  
    return () => {
      
    }
  })
  
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
