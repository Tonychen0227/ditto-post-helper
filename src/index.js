import React from "react";
import _ from "lodash";
import ReactDOM from "react-dom";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SwipeableViews from "react-swipeable-views";
import { StyledAppBar } from "./components/AppBar";
import { createPostText, createPostTitle } from "./utils/create-post-text";
import { StyledStepper } from "./components/Stepper";
import { theme } from "./theme";
import { PickADittoView } from "./views/pick-a-ditto";
import { DepositPokemonView } from "./views/deposit-pokemon";
import { InGamePlayerView } from "./views/in-game-player";
import { RedditPostView } from "./views/reddit-post";
import {
  initialState,
  appReducer,
  curriedDispatchAction,
  SET_ACTIVE_STEP,
  SET_DITTO_NATURE,
  SET_DEPOSIT,
  SET_PLAYER
} from "./state";

const styles = theme => ({
  root: {
    margin: "1rem auto",
    width: "90%",
    [theme.breakpoints.down(370)]: {
      width: "100%"
    }
  },
  contentContainer: { margin: "4rem 1rem" },
  buttonContainer: { marginTop: "1rem" }
});

const App = ({ classes }) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState);
  const postText = createPostText(state);
  const postTitle = createPostTitle(state);
  const setActiveStep = curriedDispatchAction(dispatch, SET_ACTIVE_STEP, "");
  const setDittoNature = curriedDispatchAction(dispatch, SET_DITTO_NATURE, "");
  const setDepositProp = curriedDispatchAction(dispatch, SET_DEPOSIT);
  const setPlayerProp = curriedDispatchAction(dispatch, SET_PLAYER);
  const increaseActiveStep = () => {
    const step = Math.min(state.activeStep + 1, 3);

    setActiveStep(step);
  };
  const decreaseActiveStep = () => {
    const step = Math.max(state.activeStep - 1, 0);

    setActiveStep(step);
  };
  const stepButtons = (
    <div className={classes.buttonContainer}>
      {state.activeStep > 0 && (
        <Button onClick={decreaseActiveStep}>Previous</Button>
      )}
      {state.activeStep < 3 && (
        <Button onClick={increaseActiveStep}>Next</Button>
      )}
    </div>
  );

  return (
    <MuiThemeProvider theme={theme}>
      <StyledAppBar />
      <div className={classes.root}>
        <StyledStepper
          activeStep={state.activeStep}
          steps={[
            "Pick your Ditto",
            "GTS Deposit",
            "Player Info",
            "Copy and submit"
          ]}
        />
        <div className={classes.contentContainer}>
          <SwipeableViews
            index={state.activeStep}
            onChangeIndex={setActiveStep}
          >
            <PickADittoView
              setDittoNature={setDittoNature}
              setPlayerProp={setPlayerProp}
            >
              {stepButtons}
            </PickADittoView>
            <DepositPokemonView
              setDepositProp={setDepositProp}
              player={state.player}
            >
              {stepButtons}
            </DepositPokemonView>
            <InGamePlayerView setPlayerProp={setPlayerProp}>
              {stepButtons}
            </InGamePlayerView>
            <RedditPostView postText={postText} postTitle={postTitle}>
              {stepButtons}
            </RedditPostView>
          </SwipeableViews>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

const StyledApp = withStyles(styles)(App);

const rootElement = document.getElementById("root");

ReactDOM.render(<StyledApp />, rootElement);
