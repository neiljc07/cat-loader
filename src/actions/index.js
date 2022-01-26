import { FILL_BREEDS } from "../constants/action-types";

export function fillBreeds(payload) {
  return { type: FILL_BREEDS, payload };
}