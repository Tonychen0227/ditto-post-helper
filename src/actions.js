/* Action Types */
export const SET_ACTIVE_STEP = "SET_ACTIVE_STEP";
export const SET_DITTO_NATURE = "SET_DITTO_NATURE";
export const SET_DEPOSIT = "SET_DEPOSIT";
export const SET_PLAYER = "SET_PLAYER";

/* Action Creators */

export function setActiveStep(value) {
  return { type: SET_ACTIVE_STEP, value };
}

export function setDittoNature(value) {
  return { type: SET_DITTO_NATURE, value };
}

export function setDeposit(prop, value) {
  return { type: SET_DEPOSIT, value: { prop, value } };
}

export function setPlayer(prop, value) {
  return { type: SET_PLAYER, value: { prop, value } };
}
