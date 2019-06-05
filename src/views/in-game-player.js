import React from "react";
import { connect } from "react-redux";
import { setPlayer } from "../actions";
import partial from "lodash/partial";
import Typography from "@material-ui/core/Typography";
import {
  StyledDropdown,
  createImageDropdownItems,
  createDropdownItems
} from "../components/Dropdown";
import { StyledTextField } from "../components/TextField";
import { ColumnLayout } from "../layouts/column-layout";
import { passEventValue } from "../utils/pass-event-value";
import { gen7Messages } from "../utils/gen7-gts-messages";
import { ORASTrainers } from "../utils/oras-trainers";
import { getGameGen } from "../utils/get-game-generation";

const mapStateToProps = ({ player }) => player;

const mapDispatchToProps = {
  setPlayer
};

const GTSMessageTextField = ({ setPlayer }) => (
  <StyledTextField
    label="GTS Message"
    onChange={passEventValue(partial(setPlayer, "gtsMessage"))}
  />
);

const GTSDropdown = ({ setPlayer, gtsMessage }) => (
  <StyledDropdown
    value={gtsMessage}
    label="GTS Message"
    name="gtsMessage"
    id="gtsMessage"
    onChange={passEventValue(partial(setPlayer, "gtsMessage"))}
  >
    {createDropdownItems(gen7Messages)}
  </StyledDropdown>
);

const GTSMessageInput = ({ game, setPlayer, gtsMessage }) => {
  const GTSMessageComponent =
    getGameGen(game) === 6 ? GTSMessageTextField : GTSDropdown;

  return <GTSMessageComponent setPlayer={setPlayer} gtsMessage={gtsMessage} />;
};

const TrainerTextField = ({ setPlayer }) => (
  <StyledTextField
    multiline
    label="Trainer description"
    onChange={passEventValue(partial(setPlayer, "trainerDescription"))}
  />
);

const TrainerDropdown = ({ setPlayer, value }) => (
  <React.Fragment>
    <StyledDropdown
      value={value}
      label="Trainer Description"
      name="trainerDescription"
      id="trainerDescription"
      onChange={passEventValue(partial(setPlayer, "trainerDescription"))}
    >
      {createImageDropdownItems(ORASTrainers)}
    </StyledDropdown>
  </React.Fragment>
);

const TrainerDescriptionInput = ({ game, setPlayer, value }) => {
  const TrainerDescription =
    game === "ORAS" ? TrainerDropdown : TrainerTextField;

  return <TrainerDescription setPlayer={setPlayer} value={value} />;
};

const InGamePlayerView = ({
  setPlayer,
  children,
  language,
  trainerDescription,
  game,
  gtsMessage
}) => {
  return (
    <React.Fragment>
      <ColumnLayout>
        <Typography variant="h4">Describe your in-game player</Typography>
        <StyledDropdown
          value={language}
          label="Game Language"
          name="gameLanguage"
          id="gameLanguage"
          onChange={passEventValue(partial(setPlayer, "language"))}
        >
          {createDropdownItems([
            "English",
            "Japanese",
            "French",
            "Italian",
            "German",
            "Spanish",
            "Korean",
            "Chinese"
          ])}
        </StyledDropdown>
        <TrainerDescriptionInput
          value={trainerDescription}
          game={game}
          setPlayer={setPlayer}
        />
        <StyledTextField
          label="In game name"
          onChange={passEventValue(partial(setPlayer, "inGameName"))}
        />
        <GTSMessageInput
          game={game}
          setPlayer={setPlayer}
          gtsMessage={gtsMessage}
        />
        <StyledTextField
          label="3DS Region"
          onChange={passEventValue(partial(setPlayer, "consoleRegion"))}
        />
      </ColumnLayout>
      {children}
    </React.Fragment>
  );
};

export const ConnectedInGamePlayerView = connect(
  mapStateToProps,
  mapDispatchToProps
)(InGamePlayerView);
