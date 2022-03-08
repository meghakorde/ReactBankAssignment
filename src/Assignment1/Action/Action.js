import { CREDIT, DEBIT } from "./ActionType";
export const credit = (amount, checkn) => {
  return {
    type: CREDIT,
    payload: { amount: amount, checkn: checkn },
  };
};
export const debit = (amount, checkn) => {
  return {
    type: DEBIT,
    payload: { amount: amount, checkn: checkn },
  };
};
