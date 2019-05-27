import React from "react";
import Typography from "@material-ui/core/Typography";
import { StyledDropdown } from "../components/Dropdown";
import { ColumnLayout } from "../layouts/column-layout";
import { passEventValue } from "../utils/pass-event-value";
import { gen6Pokemon, gen7Pokemon } from "../utils/pokemon-deposits";
import { getGameGen } from "../utils/get-game-generation";
import { gen7Messages } from "../utils/gen7-gts-messages";
import { ORASTrainers } from "../utils/oras-trainers";

export const PickADittoView = ({
  setPlayerProp,
  setDepositProp,
  setDittoNature,
  children,
  state
}) => {
  const onChangeGame = game => {
    const isGenSixGame = getGameGen(game) === 6;
    const defaultPokemon = isGenSixGame ? gen6Pokemon[0] : gen7Pokemon[0];
    const defaultGTSMessage = isGenSixGame ? "" : gen7Messages[0];
    const description = game === "ORAS" ? ORASTrainers[0] : "";
    setPlayerProp("game", game);
    setPlayerProp("trainerDescription", description);
    setPlayerProp("gtsMessage", defaultGTSMessage);
    setDepositProp("species", defaultPokemon);
  };

  return (
    <React.Fragment>
      <ColumnLayout>
        <Typography variant="h4">Pick your Ditto</Typography>
        <StyledDropdown
          value={state.dittoNature}
          label="Select a Ditto"
          name="dittoNature"
          id="dittoNature"
          onChange={passEventValue(setDittoNature)}
          options={[
            "Adamant",
            "Brave",
            "Bold",
            "Relaxed",
            "Impish",
            "Timid",
            "Jolly",
            "Naive",
            "Modest",
            "Quiet",
            "Calm",
            "Sassy",
            "Careful",
            "HP Fighting",
            "HP Fire",
            "HP Flying",
            "HP Grass",
            "HP Ground",
            "HP Ice",
            "HP Rock"
          ]}
        />
        <StyledDropdown
          value={state.player.game}
          label="Game Version"
          name="gameVersion"
          id="gameVersion"
          onChange={passEventValue(onChangeGame)}
          options={["ORAS", "XY", "Sun/Moon", "Ultra Sun/Ultra Moon"]}
        />
      </ColumnLayout>
      <a
        href="https://www.reddit.com/r/morebreedingdittos/wiki/dittos"
        style={{ color: "#0277bd" }}
      >
        <Typography variant="body1" style={{ color: "#0277bd" }}>
          List of Ditto IVs and Natures
        </Typography>
      </a>
      {children}
    </React.Fragment>
  );
};
