import React from "react";
import Typography from "@material-ui/core/Typography";
import { StyledDropdown } from "../components/Dropdown";
import { StyledTextField } from "../components/TextField";
import { ColumnLayout } from "../layouts/column-layout";
import { passEventValue } from "../utils/pass-event-value";
import { gen7Messages } from "../utils/gen7-gts-messages";
import { ORASTrainers } from "../utils/oras-trainers";
import { getGameGen } from "../utils/get-game-generation";

const GTSMessageTextField = ({ setPlayerProp }) => (
  <StyledTextField
    label="GTS Message"
    onChange={passEventValue(setPlayerProp("gtsMessage"))}
  />
);

const GTSDropdown = ({ setPlayerProp }) => (
  <StyledDropdown
    label="GTS Message"
    name="gtsMessage"
    id="gtsMessage"
    onChange={passEventValue(setPlayerProp("gtsMessage"))}
    options={gen7Messages}
  />
);

const GTSMessageInput = ({ game, setPlayerProp }) => {
  const GTSMessageComponent =
    getGameGen(game) === 6 ? GTSMessageTextField : GTSDropdown;

  return <GTSMessageComponent setPlayerProp={setPlayerProp} />;
};

const TrainerTextField = ({ setPlayerProp }) => (
  <StyledTextField
    multiline
    label="Trainer description"
    onChange={passEventValue(setPlayerProp("trainerDescription"))}
  />
);

const TrainerDropdown = ({ setPlayerProp, value }) => (
  <React.Fragment>
    <StyledDropdown
      value={value}
      label="Trainer Description"
      name="trainerDescription"
      id="trainerDescription"
      onChange={passEventValue(setPlayerProp("trainerDescription"))}
      options={ORASTrainers}
    />
    <a
      href="https://archives.bulbagarden.net/wiki/Category:Player_Search_System_icons"
      style={{ color: "#0277bd" }}
    >
      <Typography variant="body1" style={{ color: "#0277bd" }}>
        List of Trainer Icons
      </Typography>
    </a>
  </React.Fragment>
);

const TrainerDescriptionInput = ({ game, setPlayerProp, value }) => {
  const TrainerDescription =
    game === "ORAS" ? TrainerDropdown : TrainerTextField;

  return <TrainerDescription setPlayerProp={setPlayerProp} value={value} />;
};

export const InGamePlayerView = ({
  setPlayerProp,
  player,
  children,
  state
}) => {
  return (
    <React.Fragment>
      <ColumnLayout>
        <Typography variant="h4">Describe your in-game player</Typography>
        <StyledDropdown
          value={state.player.language}
          label="Game Language"
          name="gameLanguage"
          id="gameLanguage"
          onChange={passEventValue(setPlayerProp("language"))}
          options={[
            "English",
            "Japanese",
            "French",
            "Italian",
            "German",
            "Spanish",
            "Korean",
            "Chinese"
          ]}
        />
        <TrainerDescriptionInput
          value={state.player.trainerDescription}
          game={player.game}
          setPlayerProp={setPlayerProp}
        />
        <StyledTextField
          label="In game name"
          onChange={passEventValue(setPlayerProp("inGameName"))}
        />
        <GTSMessageInput game={player.game} setPlayerProp={setPlayerProp} />
        <StyledTextField
          label="3DS Region"
          onChange={passEventValue(setPlayerProp("consoleRegion"))}
        />
      </ColumnLayout>
      {children}
    </React.Fragment>
  );
};
