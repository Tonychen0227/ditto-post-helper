import React from "react";
import Typography from "@material-ui/core/Typography";
import { StyledDropdown } from "../components/Dropdown";
import { ColumnLayout } from "../layouts/column-layout";
import { passEventValue } from "../utils/pass-event-value";

export const PickADittoView = ({ setPlayerProp, setDittoNature, children }) => {
  return (
    <React.Fragment>
      <ColumnLayout>
        <Typography variant="h5">Select a Ditto</Typography>
        <StyledDropdown
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
        <Typography variant="h5">Select Your Game Version</Typography>
        <StyledDropdown
          onChange={passEventValue(setPlayerProp("game"))}
          options={["ORAS", "XY", "SM", "USUM"]}
        />
      </ColumnLayout>
      <a
        href="https://www.reddit.com/r/morebreedingdittos/wiki/dittos"
        style={{ color: "#0277bd" }}
      >
        <Typography variant="h6" style={{ color: "#0277bd" }}>
          List of Ditto IVs and Natures
        </Typography>
      </a>
      {children}
    </React.Fragment>
  );
};
