import React from "react";
import { connect } from "react-redux";
import { setDittoNature, setDeposit, setPlayer } from "../actions";
import Typography from "@material-ui/core/Typography";
import { StyledDropdown, createDropdownItems } from "../components/Dropdown";
import { ColumnLayout } from "../layouts/column-layout";
import { passEventValue } from "../utils/pass-event-value";
import { gen6Pokemon, gen7Pokemon } from "../utils/pokemon-deposits";
import { getGameGen } from "../utils/get-game-generation";
import { gen7Messages } from "../utils/gen7-gts-messages";
import { ORASTrainers } from "../utils/oras-trainers";

const mapStateToProps = ({ dittoNature, player }) => ({
  dittoNature: dittoNature,
  game: player.game
});

const mapDispatchToProps = {
  setDittoNature,
  setPlayer,
  setDeposit
};

const PickADittoView = ({
  setPlayer,
  setDeposit,
  setDittoNature,
  children,
  dittoNature,
  game
}) => {
  const onChangeGame = game => {
    const isGenSixGame = getGameGen(game) === 6;
    const defaultPokemon = isGenSixGame ? gen6Pokemon[0] : gen7Pokemon[0];
    const defaultGTSMessage = isGenSixGame ? "" : gen7Messages[0];
    const description = game === "ORAS" ? ORASTrainers[0] : "";
    setPlayer("game", game);
    setPlayer("trainerDescription", description);
    setPlayer("gtsMessage", defaultGTSMessage);
    setDeposit("species", defaultPokemon);
  };
  const natureDropdownItems = createDropdownItems([
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
  ]);
  const gameDropdownItems = createDropdownItems([
    "ORAS",
    "XY",
    "Sun/Moon",
    "Ultra Sun/Ultra Moon"
  ]);

  return (
    <React.Fragment>
      <ColumnLayout>
        <Typography variant="h4">Pick your Ditto</Typography>
        <StyledDropdown
          value={dittoNature}
          label="Select a Ditto"
          name="dittoNature"
          id="dittoNature"
          onChange={passEventValue(setDittoNature)}
        >
          {natureDropdownItems}
        </StyledDropdown>
        <StyledDropdown
          value={game}
          label="Game Version"
          name="gameVersion"
          id="gameVersion"
          onChange={passEventValue(onChangeGame)}
        >
          {gameDropdownItems}
        </StyledDropdown>
      </ColumnLayout>
      <a
        href="https://www.reddit.com/r/morebreedingdittos/wiki/dittos"
        target="_blank" rel="noreferrer noopener"
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

export const ConnectedPickADittoView = connect(
  mapStateToProps,
  mapDispatchToProps
)(PickADittoView);
