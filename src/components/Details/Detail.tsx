import { useState } from "react";
import DetailRow from "./DetailRow";
import InputL from "../InputL";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Button from "../Button";
import { useFormContext } from "react-hook-form";
import { resetField } from "../../redux/amount";

function Detail() {
  const [rows, setRows] = useState<{ id: number }[]>([{ id: Date.now() }]);
  const dispatch = useAppDispatch();
  const { grandTotal } = useAppSelector((state) => state.amount);
  const methods = useFormContext();
  console.log(grandTotal, "amount arra");
  return (
    <>
      <div className="m-2 bg-blue-200 p-4">
        <div className="grid grid-cols-12  bg-gray-300 ">
          <div className=" col-span-1">Sr No.</div>
          <div className=" col-span-2">Item Code</div>
          <div className=" col-span-2">Item Name</div>
          <div className="col-span-3">Description</div>
          <div className=" col-span-1">Qty</div>
          <div className=" col-span-1">Rate</div>
          <div className=" col-span-1">Amount </div>
          <div className=" col-span-1">Action </div>
        </div>
        {rows.map((obj, index) => (
          <DetailRow
            key={obj.id}
            id={obj.id}
            index={index}
            removeRow={(id) => setRows(rows.filter((val) => id !== val.id))}
          />
        ))}
        <div className="flex justify-end items-center ">
          <InputL label="Total :" className="w-2/12" value={grandTotal} />
        </div>
        <Button
          type="button"
          className="me-2"
          onClick={() => setRows([...rows, { id: Date.now() }])}
        >
          Add rows
        </Button>
        <Button
          className="me-2"
          type="button"
          onClick={() => {
            methods.reset();
            dispatch(resetField());
            setRows([{id:Date.now()}])
          }}
        >
          Reset
        </Button>
        <Button className="me-2" type="submit">
          Submit
        </Button>
      </div>
    </>
  );
}

export default Detail;
