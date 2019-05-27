import curry from "lodash/curry";
import { ORASTrainers } from "./utils/oras-trainers";
import { gen6Pokemon } from "./utils/pokemon-deposits";

export const SET_ACTIVE_STEP = "SET_ACTIVE_STEP";
export const SET_DITTO_NATURE = "SET_DITTO_NATURE";
export const SET_DEPOSIT = "SET_DEPOSIT";
export const SET_PLAYER = "SET_PLAYER";

export const curriedDispatchAction = curry((dispatch, type, prop, value) =>
  dispatch({ type, value: { prop, value } })
);

export const initialState = {
  activeStep: 0,
  dittoNature: "Adamant",
  deposit: {
    species: gen6Pokemon[0],
    ball: "Poke Ball",
    gender: "Male",
    nickname: "",
    level: 0
  },
  player: {
    language: "English",
    game: "ORAS",
    trainerDescription: ORASTrainers[0],
    inGameName: "",
    gtsMessage: "",
    consoleRegion: ""
  }
};

export const appReducer = (state, { type, value }) => {
  switch (type) {
    case SET_ACTIVE_STEP:
      return { ...state, activeStep: value.value };
    case SET_DITTO_NATURE:
      return { ...state, dittoNature: value.value };
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
      throw new Error();
  }
};
