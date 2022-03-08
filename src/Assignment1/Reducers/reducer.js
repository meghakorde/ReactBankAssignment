import { dTime } from "../component/Date";
import { CREDIT, DEBIT } from "../Action/ActionType";

const initialState = {
  balance: 0,
  tblActivity: [],
};

const operation = (state = initialState, action) => {
  switch (action.type) {
    case CREDIT:
      return {
        ...state,
        balance: state.balance + parseInt(action.payload.amount),
        tblActivity: [
          ...state.tblActivity,
          {
            amount: action.payload.amount,
            checkn: action.payload.checkn,
            date: dTime,
            type: action.type,
          },
        ],
      };

    case DEBIT:
      return {
        ...state,
        balance: state.balance - parseInt(action.payload.amount),
        tblActivity: [
          ...state.tblActivity,
          {
            amount: action.payload.amount,
            checkn: action.payload.checkn,
            date: dTime,
            type: action.type,
          },
        ],
      };

    default:
      return state;
  }
};

export default operation;
