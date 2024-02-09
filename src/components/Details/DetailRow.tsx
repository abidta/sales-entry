import { useEffect, useState } from "react";
import { ConnectMethods, InputFields } from "../../utils/types";
import Input from "../Input";
import Button from "../Button";
import ConnectForm from "../ConnectForm";
import { calcAmt, removeItem } from "../../redux/amount";
import { useFormContext, useWatch } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
type Row = {
  index: number;
  removeRow: (id: number) => void;
  id: number;
};
function DetailRow({ index, removeRow, id }: Row) {
  const methods = useFormContext();
  const [unregister, setUnregister] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const prefix: keyof InputFields = "detail_table";
  const calc = useWatch({
    control: methods.control,
    name: [`${prefix}.${index}.qty`, `${prefix}.${index}.rate`],
  });
  const amount = useAppSelector(
    (state) => state.amount?.amount[index + 1]?.amount
  );
  useEffect(() => {
    dispatch(
      calcAmt({
        id: id,
        qty: calc[0],
        amt: calc[1],
      })
    );
    methods.setValue(`${prefix}.${index}.amount`, amount);

    return () => {};
  }, [calc, amount]);
  console.log(amount, "klkl");

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
        <Input
          name={`${prefix}.${index}.amount`}
          remove={unregister}
          defaultValue={isNaN(amount) ? 0 : amount}
        />
      </div>
      <div className="flex col-span-1 items-center justify-center bg-white border ">
        <ConnectForm>
          {({ remove }: ConnectMethods) => {
            return (
              <>
                <Button
                  type="button"
                  onClick={() => {
                    dispatch(removeItem({ id }));
                    removeRow(id);
                    remove(index);
                    setUnregister(true);
                  }}
                >
                  Remove
                </Button>
              </>
            );
          }}
        </ConnectForm>
      </div>
    </div>
  );
}

export default DetailRow;
