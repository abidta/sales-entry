import { InputFields } from "../utils/types";
import InputL from "./InputL";
import { useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

function Header() {
  const methods = useFormContext();
  const { grandTotal } = useAppSelector((state) => state.amount);
  const prefixName: keyof InputFields = "header_table";
  console.log(grandTotal);
  useEffect(() => {
    methods.setValue(`${prefixName}.ac_amt`, grandTotal);
    return () => {};
  }, [grandTotal]);

  return (
    <div className="p-5 m-4 bg-green-200">
      <div className="grid grid-cols-3 gap-2 ">
        <InputL name={`${prefixName}.vr_no`} label="Vr NO:" />
        <InputL
          name={`${prefixName}.vr_date` as keyof InputFields}
          label="Vr Date:"
          defaultValue={new Date().toISOString()}
        />
        <InputL name={`${prefixName}.status`} label="Status" />
        <div className="grid grid-cols-subgrid col-span-3 mt-5 ">
          <div className="grid col-span-2">
            <InputL
              name={`${prefixName}.ac_name`}
              label="Ac name:"
              className="grow"
            />
          </div>
          <InputL
            name={`${prefixName}.ac_amt`}
            label="Ac Amt:"
            defaultValue={isNaN(grandTotal) ? "0" : grandTotal}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
