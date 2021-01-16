import { TXFR_FROM_CHECKING } from "../actionTypes";

const initialState = {
  balance: 139,
  transactions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TXFR_FROM_CHECKING: {
      return {
        ...state,  // balance: 139, transactions: []
        balance: state.balance + action.payload.amount,
        transactions: [
          ...state.transactions,
          {
            ...action.payload.transaction
          }
        ]
      }
    }
    default:
      return state;
  }
}
