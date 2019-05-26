import React from "react";
import Typography from "@material-ui/core/Typography";
import { StyledDropdown } from "../components/Dropdown";
import { StyledTextField } from "../components/TextField";
import { ColumnLayout } from "../layouts/column-layout";
import { passEventValue } from "../utils/pass-event-value";
import { Gen7Messages } from "../utils/gen7-gts-messages";
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
    onChange={passEventValue(setPlayerProp("gtsMessage"))}
    options={Gen7Messages}
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

const TrainerDropdown = ({ setPlayerProp }) => (
  <StyledDropdown
    onChange={passEventValue(setPlayerProp("trainerDescription"))}
    options={ORASTrainers}
  />
);

const TrainerDescriptionInput = ({ game, setPlayerProp }) => {
  const TrainerDescription =
    game === "ORAS" ? TrainerDropdown : TrainerTextField;

  return <TrainerDescription setPlayerProp={setPlayerProp} />;
};

export const InGamePlayerView = ({ setPlayerProp, player, children }) => {
  return (
    <React.Fragment>
      <ColumnLayout>
        <Typography variant="h4">Describe your in-game player</Typography>
        <Typography variant="body1">
          Describe what your trainer looks like
        </Typography>
        <StyledDropdown
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
