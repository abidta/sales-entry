import { createSlice } from "@reduxjs/toolkit";

const calcTotal = (arr: AmountType[]) =>
  arr.reduce((tot, item) => tot + (isNaN(item.amount) ? 0 : item.amount), 0);
type AmountType = {
  id: string | null;
  amount: number;
};
const INITIAL_STATE: {
  amount: AmountType[];
  grandTotal: number;
} = {
  amount: [
    {
      amount: 0,
      id: null,
    },
  ],
  grandTotal: 0,
};
const amountSlice = createSlice({
  name: "amount",
  initialState: INITIAL_STATE,
  reducers: {
    calcAmt: (state, action) => {
      state.amount = state.amount.map((item) => {
        if (item.id === action.payload?.id) {
          item.amount = action.payload?.qty * action.payload?.amt;
          return item;
        }
        return item;
      });
      if (!state.amount.find((item) => item.id === action.payload?.id)) {
        state.amount.push({
          id: action.payload?.id,
          amount: action.payload?.qty * action.payload?.amt,
        });
      }
      state.grandTotal = calcTotal(state.amount);
    },

    removeItem: (state, action) => {
      state.amount = state.amount.filter(
        (item) => item.id != action.payload.id
      );
      state.grandTotal = calcTotal(state.amount);
    },
  },
});

export default amountSlice.reducer;
export const { calcAmt, removeItem } = amountSlice.actions;
