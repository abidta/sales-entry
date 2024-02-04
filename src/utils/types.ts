import { UseFormRegister } from "react-hook-form";

export type Input = {
  className?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  name: ReturnUseRegister["name"];
};
type ReturnUseRegister = ReturnType<UseFormRegister<InputFields>>;

export type InputL = {
  label?: string;
} & Input;
export type InputFields = {
  header_table: HeaderTable;
  detail_table: DetailTable[];
  grand: number;
};
type DetailTable = {
  vr_no: number;
  sr_no: number;
  item_code: string;
  item_name: string;
  description: string;
  qty: number;
  rate: number;
  amount: number;
};
export type HeaderTable = {
  vr_no: number;
  vr_date: string;
  ac_name: string;
  ac_amt: number;
  status: "A" | "L";
};
