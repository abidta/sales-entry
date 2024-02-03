import Input from "../Input";
type Row = {
  index: number;
};
function DetailRow({ index }: Row) {
  return (
    <div className="grid grid-cols-12 bg-blue-500">
      <div className=" flex col-span-1">
        <Input defaultValue={index} />
      </div>
      <div className="flex col-span-2">
        <Input />
      </div>
      <div className="flex col-span-6">
        <Input />
      </div>
      <div className="flex col-span-1">
        <Input />
      </div>
      <div className="flex col-span-1">
        <Input />
      </div>
      <div className="flex col-span-1">
        <Input />
      </div>
    </div>
  );
}

export default DetailRow;
