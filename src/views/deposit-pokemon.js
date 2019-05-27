import React from "react";
import Typography from "@material-ui/core/Typography";
import { StyledDropdown } from "../components/Dropdown";
import { StyledTextField } from "../components/TextField";
import { ColumnLayout } from "../layouts/column-layout";
import { passEventValue } from "../utils/pass-event-value";
import { getGameGen } from "../utils/get-game-generation";
import { gen6Pokemon, gen7Pokemon } from "../utils/pokemon-deposits";

export const DepositPokemonView = ({
  setDepositProp,
  player,
  children,
  state
}) => {
  return (
    <React.Fragment>
      <ColumnLayout>
        <Typography variant="h4">What Pokemon will you deposit?</Typography>
        <StyledDropdown
          value={state.deposit.species}
          label="Pokemon"
          id="pokemonDeposit"
          name="pokemonDeposit"
          onChange={passEventValue(setDepositProp("species"))}
          options={getGameGen(player.game) === 6 ? gen6Pokemon : gen7Pokemon}
        />
        <StyledDropdown
          value={state.deposit.ball}
          label="Pokeball"
          id="pokeball"
          name="pokeball"
          onChange={passEventValue(setDepositProp("ball"))}
          options={[
            "Poké Ball",
            "Master Ball",
            "Ultra Ball",
            "Great Ball",
            "Safari Ball",
            "Net Ball",
            "Dive Ball",
            "Nest Ball",
            "Repeat Ball",
            "Timer Ball",
            "Luxury Ball",
            "Premier Ball",
            "Dusk Ball",
            "Heal Ball",
            "Quick Ball",
            "Other"
          ]}
        />
        <StyledDropdown
          value={state.deposit.gender}
          label="Gender"
          id="gender"
          name="gender"
          onChange={passEventValue(setDepositProp("gender"))}
          options={["Male", "Female"]}
        />
        <StyledTextField
          label="Nickname"
          onChange={passEventValue(setDepositProp("nickname"))}
        />
        <StyledTextField
          type="number"
          label="Level"
          onChange={passEventValue(setDepositProp("level"))}
        />
      </ColumnLayout>
      {children}
    </React.Fragment>
  );
};
