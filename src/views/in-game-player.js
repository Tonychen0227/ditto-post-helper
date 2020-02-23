import React from "react";
import { connect } from "react-redux";
import { setPlayer } from "../actions";
import partial from "lodash/partial";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import {
  StyledDropdown,
  createImageDropdownItems,
  createDropdownItems
} from "../components/Dropdown";
import { StyledTextField } from "../components/TextField";
import { ColumnLayout } from "../layouts/column-layout";
import { passEventValue } from "../utils/pass-event-value";
import { gtsMessages } from "../utils/gts-messages";
import { ORASTrainers } from "../utils/oras-trainers";
import { getGameGen } from "../utils/get-game-generation";

const mapStateToProps = ({ player }) => player;

const mapDispatchToProps = {
  setPlayer
};

const styles = {
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    border: "1px solid #dadde9"
  }
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
    {createDropdownItems(gtsMessages)}
  </StyledDropdown>
);

const GTSMessageInput = ({ game, setPlayer, gtsMessage }) => {
  const GTSMessageComponent =
    getGameGen(game) === 6 ? GTSMessageTextField : GTSDropdown;

  return <GTSMessageComponent setPlayer={setPlayer} gtsMessage={gtsMessage} />;
};

const tooltipTitle = (
  <React.Fragment>
    <Typography variant="subtitle1">Trainer Description</Typography>
    <Typography variant="body2">
      You can find how your trainer appears on the GTS by looking at your
      Trainer Card or Trainer Passport in-game
    </Typography>
  </React.Fragment>
);

const CustomTooltip = ({ classes, children }) => (
  <Tooltip
    disableTouchListener
    placement="top"
    title={tooltipTitle}
    classes={classes}
  >
    {children}
  </Tooltip>
);

const StyledTooltip = withStyles(styles)(CustomTooltip);

const TrainerTextField = ({ setPlayer }) => (
  <React.Fragment>
    <StyledTextField
      multiline
      label="Trainer description"
      onChange={passEventValue(partial(setPlayer, "trainerDescription"))}
    />
    <Typography variant="body2">
      <StyledTooltip>
        <IconButton color="primary">
          <HelpOutlineIcon fontSize="small" />
        </IconButton>
      </StyledTooltip>
      Describe how your trainer looks in-game
    </Typography>
    <Typography variant="body2">
      Clothing Lists:{" "}
      <a
        href="https://www.serebii.net/xy/customisation.shtml"
        target="_blank"
        rel="noreferrer noopener"
      >
        XY
      </a>{" "}
      |{" "}
      <a
        href="https://www.serebii.net/sunmoon/customisation.shtml"
        target="_blank"
        rel="noreferrer noopener"
      >
        Sun/Moon
      </a>{" "}
      |{" "}
      <a
        href="https://www.serebii.net/ultrasunultramoon/customisation.shtml"
        target="_blank"
        rel="noreferrer noopener"
      >
        Ultra Sun/Ultra Moon
      </a>
    </Typography>
  </React.Fragment>
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
      </ColumnLayout>
      {children}
    </React.Fragment>
  );
};

export const ConnectedInGamePlayerView = connect(
  mapStateToProps,
  mapDispatchToProps
)(InGamePlayerView);
