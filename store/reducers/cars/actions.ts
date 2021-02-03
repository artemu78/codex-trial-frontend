import { ICar, IMeta, IError } from "./types";

export const types = {
  CARS_REQUEST: "@cars/REQUEST",
  CARS_SUCCESS: "@cars/SUCCESS",
  CARS_DELETE: "@cars/DELETE",
  CARS_DELETE_SUCCESS: "@cars/DELETE_SUCCESS",
  CARS_ADD_REQUEST: "@cars/ADD_REQUEST",
  CARS_ADD_SUCCESS: "@cars/ADD_REQUEST_SUCCESS",
  CARS_FAILURE: "@cars/FAILURE",
  CARS_EDIT: "@cars/edit",
  CARS_EDIT_SUCCESS: "@cars/edit_success",
} as const;

export function Add(payload: ICar) {
  return {
    type: types.CARS_ADD_REQUEST,
    payload,
  };
}

export function AddSuccess(payload: ICar) {
  return {
    type: types.CARS_ADD_SUCCESS,
    payload,
  };
}

export function Delete(payload: string) {
  return { type: types.CARS_DELETE, payload };
}

export function DeleteSuccess(payload: string) {
  return { type: types.CARS_DELETE_SUCCESS, payload };
}

export function Request(payload: IMeta) {
  return { type: types.CARS_REQUEST, payload };
}

export function Success(cars: ICar[]) {
  return { type: types.CARS_SUCCESS, items: cars };
}

export function Failure(error: IError) {
  return { type: types.CARS_FAILURE, error };
}

export function Edit(payload: ICar) {
  return { type: types.CARS_EDIT, payload };
}

export function EditSuccess(payload: ICar) {
  return { type: types.CARS_EDIT_SUCCESS, payload };
}
