import Input from "./Input";

function Header() {
  return (
    <div className="p-5 m-4 bg-green-200">
      <div className="grid grid-cols-3 gap-2 ">
        <Input label="Vr NO:" />
        <Input label="Vr Date:" value={new Date().toLocaleDateString()} />
        <Input label="Status" />
        <div className="grid grid-cols-subgrid col-span-3 mt-5 ">
          <div className="grid col-span-2">
            <Input label="Ac name:" className="grow" />
          </div>
          <Input label="Ac Amt:" />
        </div>
      </div>
    </div>
  );
}

export default Header;
