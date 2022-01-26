import { FILL_BREEDS } from "../constants/action-types";

const initialState = {
  breeds: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FILL_BREEDS:
      return {
        ...state,
        breeds: action.payload
      }
  }

  return state;
}

export default rootReducer;