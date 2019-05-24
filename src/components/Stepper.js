import React from "react";
import StepperContainer from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { withStyles } from "@material-ui/core";

const styles = {
  root: {
    paddingLeft: 0,
    paddingRight: 0
  }
};

const Stepper = ({ steps, activeStep, classes }) => {
  return (
    <StepperContainer activeStep={activeStep} classes={classes}>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </StepperContainer>
  );
};

export const StyledStepper = withStyles(styles)(Stepper);
