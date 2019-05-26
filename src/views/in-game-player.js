import React from "react";
import Typography from "@material-ui/core/Typography";
import { StyledDropdown } from "../components/Dropdown";
import { StyledTextField } from "../components/TextField";
import { ColumnLayout } from "../layouts/column-layout";
import { passEventValue } from "../utils/pass-event-value";

export const InGamePlayerView = ({ setPlayerProp, children }) => {
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
        <StyledTextField
          multiline
          label="Trainer description"
          onChange={passEventValue(setPlayerProp("trainerDescription"))}
        />
        <StyledTextField
          label="In game name"
          onChange={passEventValue(setPlayerProp("inGameName"))}
        />
        <StyledTextField
          label="GTS Mesage"
          onChange={passEventValue(setPlayerProp("gtsMessage"))}
        />
        <StyledTextField
          label="3DS Region"
          onChange={passEventValue(setPlayerProp("consoleRegion"))}
        />
      </ColumnLayout>
      {children}
    </React.Fragment>
  );
};
