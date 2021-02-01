import { ICar } from "./types";

const initialState = {
  _metadata: {},
  cars: [],
};

interface ICarsState {
  _metadata: {
    page: number;
    total: number;
  };
  cars: ICar[];
}

export default function CarsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
