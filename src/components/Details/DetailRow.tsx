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
      <div className=" flex col-span-1 relative">
        <Input
          name={`${prefix}.${index}.sr_no`}
          remove={unregister}
          value={index + 1}
          pattern={/^\d{1,18}$/}
          message="must be number"
        />
      </div>
      <div className="flex col-span-2">
        <Input
          name={`${prefix}.${index}.item_code`}
          remove={unregister}
          pattern={/^.{1,200}$/}
        />
      </div>
      <div className="flex col-span-5">
        <Input
          name={`${prefix}.${index}.item_name`}
          remove={unregister}
          pattern={/^.{1,200}$/}
        />
      </div>
      <div className="flex col-span-1 relative">
        <Input
          name={`${prefix}.${index}.qty`}
          remove={unregister}
          pattern={/^\d{1,18}(?:\.\d{1,3})?$/}
          message="Please enter a number with maximum 3 digits after the decimal point"
        />
      </div>
      <div className="flex col-span-1 relative">
        <Input
          name={`${prefix}.${index}.rate`}
          remove={unregister}
          pattern={/^\d{1,18}(?:\.\d{1,2})?$/}
          message="Please enter a number with maximum 2 digits after the decimal point"
        />
      </div>
      <div className="flex col-span-1 relative">
        <Input
          name={`${prefix}.${index}.amount`}
          remove={unregister}
          value={amount}
        />
      </div>
      <div className="flex col-span-1 relative items-center justify-center bg-white border ">
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
