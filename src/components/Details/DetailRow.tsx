import { InputFields } from "../../utils/types";
import Input from "../Input";
type Row = {
  index: number;
};
function DetailRow({ index }: Row) {
  const prefix: keyof InputFields = "detail_table";
  return (
    <div className="grid grid-cols-12 bg-blue-500">
      <div className=" flex col-span-1">
        <Input name={`${prefix}.${index}.sr_no`} defaultValue={index} />
      </div>
      <div className="flex col-span-2">
        <Input name={`${prefix}.${index}.item_code`} />
      </div>
      <div className="flex col-span-6">
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
    </div>
  );
}

export default DetailRow;
