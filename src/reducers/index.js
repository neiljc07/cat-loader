import { APPEND_CATS, FILL_BREEDS, FILL_CATS, SELECT_CAT, SET_ERROR } from "../constants/action-types";

const initialState = {
  breeds: [],
  cats: [],
  selectedCat: null,
  errorMessage: ''
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

    case SELECT_CAT:
      return {
        ...state,
        selectedCat: action.payload
      }

    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      }

    default:
      return state;
  }
}

export default rootReducer;