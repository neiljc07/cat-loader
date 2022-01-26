import { APPEND_CATS, FILL_BREEDS, FILL_CATS } from "../constants/action-types";

const initialState = {
  breeds: [],
  cats: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FILL_BREEDS:
      return {
        ...state,
        breeds: action.payload
      }
    
    case FILL_CATS:
      return {
        ...state,
        cats: action.payload
      }

    case APPEND_CATS:
      return {
        ...state,
        cats: state.cats.concat(action.payload)
      }

    default:
      return state;
  }
}

export default rootReducer;