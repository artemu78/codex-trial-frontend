import { ICar } from "./types";

export const types = {
  CARS_REQUEST: "@cars/REQUEST",
  CARS_SUCCESS: "@cars/SUCCESS",
  CARS_DELETE: "@cars/DELETE",
  CARS_ADD: "@cars/details/REQUEST",
  CARS_FAILURE: "@cars/details/FAILURE",
} as const;

export function Add(payload: ICar) {
  return {
    type: types.CARS_ADD,
    payload,
  };
}

export function Delete(payload: string) {
  return { type: types.CARS_DELETE, payload };
}

export function Request(payload: string) {
  return { type: types.CARS_REQUEST, payload };
}
