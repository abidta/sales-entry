import { InputFields } from "../../utils/types";
import Input from "../Input";
type Row = {
  index: number;
  removeRow:(id:number)=>void,
  id:number
};
function DetailRow({ index,removeRow,id }: Row) {
  const prefix: keyof InputFields = "detail_table";
  return (
    <div className="grid grid-cols-12 ">
      <div className=" flex col-span-1">
        <Input name={`${prefix}.${index}.sr_no`} defaultValue={index + 1} />
      </div>
      <div className="flex col-span-2">
        <Input name={`${prefix}.${index}.item_code`} />
      </div>
      <div className="flex col-span-5">
        <Input name={`${prefix}.${index}.item_name`} />
      </div>
      <div className="flex col-span-1">
        <Input name={`${prefix}.${index}.qty`} />
      </div>
      <div className="flex col-span-1">
        <Input name={`${prefix}.${index}.rate`} />
      </div>
      <div className="flex col-span-1">
        <Input name={`${prefix}.${index}.amount`} />
      </div>
      <div className="flex col-span-1 items-center justify-center bg-white border ">
        <button type="button" className="" onClick={()=>removeRow(id)}>Remove</button>
      </div>
    </div>
  );
}

export default DetailRow;
