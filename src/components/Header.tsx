import { InputFields } from "../utils/types";
import InputL from "./InputL";

function Header() {
  const prefixName: keyof InputFields = "header_table";
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
          <InputL name={`${prefixName}.ac_amt`} label="Ac Amt:" />
        </div>
      </div>
    </div>
  );
}

export default Header;
