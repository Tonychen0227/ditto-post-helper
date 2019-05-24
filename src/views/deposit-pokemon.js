import React from "react";
import Typography from "@material-ui/core/Typography";
import { StyledDropdown } from "../components/Dropdown";
import { StyledTextField } from "../components/TextField";
import { ColumnLayout } from "../layouts/column-layout";
import { passEventValue } from "../utils/pass-event-value";

export const DepositPokemonView = ({ setDepositProp, children }) => {
  return (
    <React.Fragment>
      <ColumnLayout>
        <Typography variant="h4">What Pokemon will you deposit?</Typography>
        <StyledDropdown
          onChange={passEventValue(setDepositProp("species"))}
          options={[
            "Fomantis",
            "Poliwag",
            "Ledyba",
            "Spinarak",
            "Whismur",
            "Zubat"
          ]}
        />
        <StyledDropdown
          onChange={passEventValue(setDepositProp("ball"))}
          options={[
            "Master Ball",
            "Ultra Ball",
            "Great Ball",
            "Poké Ball",
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
            "Cherish Ball",
            "Other"
          ]}
        />
        <StyledDropdown
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
