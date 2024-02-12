import {
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormReturn,
} from "react-hook-form";

export type Input = {
  className?: string;
  value?: string | number;
  disabled?: boolean;
  name?: ReturnUseRegister["name"];
  remove?: boolean;
  message?: string;
  pattern?: RegExp;
};
export type ReturnUseRegister = ReturnType<UseFormRegister<InputFields>>;

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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ConnectMethods extends UseFormReturn<any> {
  remove: UseFieldArrayRemove;
}
