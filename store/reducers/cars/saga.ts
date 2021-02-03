import { put, call, takeEvery } from "redux-saga/effects";
import {
  types,
  Success,
  Failure,
  AddSuccess,
  DeleteSuccess,
  EditSuccess,
} from "./actions";
import { IMeta, ICar } from "./types";

function* getCars({ payload }: { payload: IMeta; type: string }) {
  try {
    const cars = yield call(mockCarsRequest, payload);
    yield put(Success(cars));
  } catch (error) {
    yield put(Failure(error));
  }
}

function* addCar({ payload }: { payload: ICar; type: string }) {
  try {
    const car = yield call(mockCarsAddRequest, payload);
    yield put(AddSuccess(car));
  } catch (error) {
    yield put(Failure(error));
  }
}

function* deleteCar({ payload }: { payload: string; type: string }) {
  try {
    yield call(mockCarDelete, payload);
    yield put(DeleteSuccess(payload));
  } catch (error) {
    yield put(Failure(error));
  }
}

function* editCar({ payload }: { payload: ICar; type: string }) {
  try {
    yield call(mockCarEdit, payload);
    yield put(EditSuccess(payload));
  } catch (error) {
    yield put(Failure(error));
  }
}

export function* watchCars() {
  yield takeEvery(types.CARS_REQUEST, getCars);
  yield takeEvery(types.CARS_ADD_REQUEST, addCar);
  yield takeEvery(types.CARS_DELETE, deleteCar);
  yield takeEvery(types.CARS_EDIT, editCar);
}

function mockCarsRequest(payload: IMeta): ICar[] {
  return [
    {
      make: "BMW",
      model: "X2",
      year: 2019,
      id: "1232234",
    },
  ];
}

function mockCarsAddRequest(payload: ICar): ICar {
  const id = (Math.random() * 1000000).toFixed().toString();
  return { ...payload, id };
}

function mockCarDelete(payload: string): void {
  // server suppose to return 200
}

function mockCarEdit(payload: ICar): void {
  // server suppose to return 200
}
