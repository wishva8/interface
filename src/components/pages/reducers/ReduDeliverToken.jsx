import { ACTION_TYPE } from "../action/deliveryToken";

const initialState = {
  list: [],
};

export const deliveryToken = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_ALL:
      return {
        ...state,
        list: [...action.payload],
      }
      
    default:
      return state;
  }
};
