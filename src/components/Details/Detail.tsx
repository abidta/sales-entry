import { useState } from "react";
import DetailRow from "./DetailRow";
import InputL from "../InputL";
import { useAppSelector } from "../../hooks/redux";

function Detail() {
  const [rows, setRows] = useState<{ id: number }[]>([{ id: Date.now() }]);
  const { grandTotal } = useAppSelector((state) => state.amount);
  console.log(grandTotal, "amount arra");
  return (
    <>
      <div className="m-2 bg-orange-300 p-4">
        <div className="grid grid-cols-12  bg-gray-300 ">
          <div className=" col-span-1">Sr No.</div>
          <div className=" col-span-2">Item Code</div>
          <div className=" col-span-5">Item Name</div>
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
          <InputL
            name="grand"
            label="Total :"
            className="w-2/12"
            defaultValue={grandTotal}
          />
        </div>
        <button
          type="button"
          onClick={() => setRows([...rows, { id: Date.now() }])}
          className="bg-green-600"
        >
          add
        </button>
        <button type="submit">Submit</button>
      </div>
    </>
  );
}

export default Detail;
