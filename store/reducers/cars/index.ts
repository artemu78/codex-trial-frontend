import { ICarsState } from "./types";
import { types as actionTypes } from "./actions";

const initialState = {
  _metadata: {
    page: 0,
    per_page: 0,
    total_items: 0,
  },
  error: null,
  loading: false,
  items: [],
};

export default function CarsReducer(state: ICarsState = initialState, action) {
  switch (action.type) {
    case actionTypes.CARS_SUCCESS:
      return { ...state, items: action.items, loading: false };
    case actionTypes.CARS_FAILURE:
      return { ...state, error: action.error, loading: false };
    case actionTypes.CARS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.CARS_ADD_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };
    case actionTypes.CARS_ADD_REQUEST:
      return { ...state, loading: true };
    case actionTypes.CARS_DELETE_SUCCESS:
      const itemsFiltered = state.items.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, items: itemsFiltered };
    case actionTypes.CARS_EDIT_SUCCESS:
      const itemsEdited = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, items: itemsEdited };
    default:
      return state;
  }
}

export const carsSelector = (page, perPage) => (state) => state.cars?.items;
export const loadingSelector = (state) => state.cars.loading;
export const errorSelector = (state) => state.cars.error;
