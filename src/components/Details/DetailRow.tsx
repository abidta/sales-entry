import { useState } from "react";
import { ConnectMethods, InputFields } from "../../utils/types";
import Input from "../Input";
import Button from "../Button";
import ConnectForm from "../ConectForm";
type Row = {
  index: number;
  removeRow: (id: number) => void;
  id: number;
};
function DetailRow({ index, removeRow, id }: Row) {
  const [unregister, setUnregister] = useState<boolean>(false);

  const prefix: keyof InputFields = "detail_table";

  return (
    <div className="grid grid-cols-12 ">
      <div className=" flex col-span-1">
        <Input
          name={`${prefix}.${index}.sr_no`}
          remove={unregister}
          defaultValue={index + 1}
        />
      </div>
      <div className="flex col-span-2">
        <Input name={`${prefix}.${index}.item_code`} remove={unregister} />
      </div>
      <div className="flex col-span-5">
        <Input name={`${prefix}.${index}.item_name`} remove={unregister} />
      </div>
      <div className="flex col-span-1">
        <Input name={`${prefix}.${index}.qty`} remove={unregister} />
      </div>
      <div className="flex col-span-1">
        <Input name={`${prefix}.${index}.rate`} remove={unregister} />
      </div>
      <div className="flex col-span-1">
        <Input name={`${prefix}.${index}.amount`} remove={unregister} />
      </div>
      <div className="flex col-span-1 items-center justify-center bg-white border ">
        <ConnectForm>
          {({ remove }: ConnectMethods) => (
            <>
              <Button
                type="button"
                onClick={() => {
                  removeRow(id);
                  remove(index);
                  setUnregister(true);
                }}
              >
                Remove
              </Button>
            </>
          )}
        </ConnectForm>
      </div>
    </div>
  );
}

export default DetailRow;
