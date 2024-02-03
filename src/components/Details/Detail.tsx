import { useState } from "react";
import DetailRow from "./DetailRow";
import InputL from "../InputL";

function Detail() {
  const [rows, setRows] = useState<{ id: number }[]>([]);
  return (
    <>
      <div className="m-2 bg-orange-300 p-4">
        <div className="grid grid-cols-12  bg-gray-300 ">
          <div className=" col-span-1">Sr No.</div>
          <div className=" col-span-2">Item Code</div>
          <div className=" col-span-6">Item Name</div>
          <div className=" col-span-1">Qty</div>
          <div className=" col-span-1">Rate</div>
          <div className=" col-span-1">Amount </div>
        </div>
        {rows.map((obj, index) => (
          <DetailRow key={obj.id} index={index + 1} />
        ))}
        <div className="flex justify-end items-center ">
          {" "}
          <InputL label="Total :" className="w-2/12" />
        </div>
        <button
          onClick={() => setRows([...rows, { id: Date.now() }])}
          className="bg-green-600"
        >
          add
        </button>
      </div>
    </>
  );
}

export default Detail;
