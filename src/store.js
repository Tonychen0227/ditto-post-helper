import { createStore } from "redux";
import { ORASTrainers } from "./utils/oras-trainers";
import { gen6Pokemon } from "./utils/pokemon-deposits";
import { pokeballs } from "./utils/pokeballs";
import { appReducer } from "./reducers";

export const initialState = {
  activeStep: 0,
  dittoNature: "Adamant",
  deposit: {
    species: gen6Pokemon[0],
    ball: pokeballs[0],
    gender: "Male",
    nickname: "",
    level: 0
  },
  player: {
    language: "English",
    game: "ORAS",
    trainerDescription: ORASTrainers[0].name,
    inGameName: "",
    gtsMessage: "",
    consoleRegion: ""
  }
};

export const store = createStore(appReducer, initialState);
