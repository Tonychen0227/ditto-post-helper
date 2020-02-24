import React from "react";
import { connect } from "react-redux";
import { setDittoNature, setDeposit, setPlayer } from "../actions";
import Typography from "@material-ui/core/Typography";
import { PaperLayout } from "../components/Paper";
import { StyledDropdown, createDropdownItems } from "../components/Dropdown";
import { passEventValue } from "../utils/pass-event-value";
import { natureDropdownItems } from "../utils/ditto-types";
import {
  gen6Pokemon,
  gen7Pokemon,
  gen8Pokemon
} from "../utils/pokemon-deposits";
import { getGameGen } from "../utils/get-game-generation";
import { gtsMessages } from "../utils/gts-messages";
import { ORASTrainers } from "../utils/oras-trainers";
import { SWSHTrainers } from "../utils/swsh-trainers";

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
    const isGenEightGame = getGameGen(game) === 8;
    const defaultPokemon = isGenSixGame
      ? gen6Pokemon[0]
      : isGenEightGame
      ? gen8Pokemon[0]
      : gen7Pokemon[0];
    const defaultGTSMessage = isGenSixGame ? "" : gtsMessages[0];
    const description =
      game === "ORAS"
        ? ORASTrainers[0]
        : game === "Sword/Shield"
        ? SWSHTrainers[0].name
        : "";
    setPlayer("game", game);
    setPlayer("trainerDescription", description);
    setPlayer("gtsMessage", defaultGTSMessage);
    setDeposit("species", defaultPokemon);
  };

  const gameDropdownItems = createDropdownItems([
    "ORAS",
    "XY",
    "Sun/Moon",
    "Ultra Sun/Ultra Moon",
    "Sword/Shield"
  ]);

  return (
    <React.Fragment>
      <PaperLayout>
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
        <a
          href="https://www.reddit.com/r/morebreedingdittos/wiki/dittos"
          target="_blank"
          rel="noreferrer noopener"
          style={{ color: "#0277bd" }}
        >
          <Typography variant="body1" style={{ color: "#0277bd" }}>
            List of Ditto IVs and Natures
          </Typography>
        </a>
        {children}
      </PaperLayout>
    </React.Fragment>
  );
};

export const ConnectedPickADittoView = connect(
  mapStateToProps,
  mapDispatchToProps
)(PickADittoView);
