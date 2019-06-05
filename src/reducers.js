import {
  SET_ACTIVE_STEP,
  SET_DITTO_NATURE,
  SET_DEPOSIT,
  SET_PLAYER
} from "./actions";

export const appReducer = (state, { type, value }) => {
  switch (type) {
    case SET_ACTIVE_STEP:
      return { ...state, activeStep: value };
    case SET_DITTO_NATURE:
      return { ...state, dittoNature: value };
    case SET_DEPOSIT:
      return {
        ...state,
        deposit: { ...state.deposit, [value.prop]: value.value }
      };
    case SET_PLAYER:
      return {
        ...state,
        player: { ...state.player, [value.prop]: value.value }
      };
    default:
      return state;
  }
};
