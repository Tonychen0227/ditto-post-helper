import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { StyledTextField } from "../components/TextField";
import { ColumnLayout } from "../layouts/column-layout";
import { copyToClipboard } from "../utils/copy-to-clipboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { withStyles } from "@material-ui/core/styles";
import { createPostText, createPostTitle } from "../utils/create-post-text";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const mapStateToProps = state => ({
  postText: createPostText(state),
  postTitle: createPostTitle(state)
});

const styles = {
  button: {
    margin: "5px",
    backgroundColor: "#0277bd",
    color: "#fff",
    "&:hover": { color: "#000" }
  },
  icon: {
    marginLeft: "3px"
  }
};

const ButtonWithTooltip = ({
  isTooltipOpen,
  setIsTooltipOpen,
  tooltipTitle,
  children,
  textFieldRef,
  classes
}) => {
  return (
    <ClickAwayListener onClickAway={() => setIsTooltipOpen(false)}>
      <Tooltip
        PopperProps={{
          disablePortal: true
        }}
        placement="top"
        onClose={() => setIsTooltipOpen(false)}
        open={isTooltipOpen}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={tooltipTitle}
      >
        <Button
          onClick={() =>
            copyToClipboard(textFieldRef) || setIsTooltipOpen(true)
          }
          variant="contained"
          className={classes.button}
        >
          {children}
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};

const LinkButton = ({ classes, children }) => (
  <Button variant="contained" className={classes.button}>
    {children}
  </Button>
);

const FileCopy = ({ classes }) => (
  <FileCopyIcon fontSize="small" className={classes.icon} />
);

const StyledButton = withStyles(styles)(LinkButton);
const StyledButtonWithToolTip = withStyles(styles)(ButtonWithTooltip);
const StyledFileCopyIcon = withStyles(styles)(FileCopy);

const RedditPostView = ({ postText, postTitle, children }) => {
  const [isTitleTooltipOpen, setIsTitleTooltipOpen] = React.useState(false);
  const [isBodyTooltipOpen, setIsBodyTooltipOpen] = React.useState(false);
  const titleTextFieldRef = React.useRef(null);
  const bodyTextFieldRef = React.useRef(null);

  return (
    <React.Fragment>
      <ColumnLayout>
        <Typography variant="h4">
          Copy and submit your post{" "}
          <span role="img" aria-label="tada">
            🎉
          </span>
        </Typography>
        <Typography variant="h5">Request title</Typography>
        <StyledTextField value={postTitle} inputRef={titleTextFieldRef} />
        <Typography variant="h5">Request body</Typography>
        <StyledTextField
          multiline
          value={postText}
          inputRef={bodyTextFieldRef}
        />
      </ColumnLayout>
      <StyledButtonWithToolTip
        tooltipTitle="Copied!"
        isTooltipOpen={isTitleTooltipOpen}
        setIsTooltipOpen={setIsTitleTooltipOpen}
        textFieldRef={titleTextFieldRef}
      >
        Copy Title
        <StyledFileCopyIcon />
      </StyledButtonWithToolTip>
      <StyledButtonWithToolTip
        tooltipTitle="Copied!"
        isTooltipOpen={isBodyTooltipOpen}
        setIsTooltipOpen={setIsBodyTooltipOpen}
        textFieldRef={bodyTextFieldRef}
      >
        Copy Body
        <StyledFileCopyIcon />
      </StyledButtonWithToolTip>
      <StyledButton>
        <a
          href="https://www.reddit.com/r/morebreedingdittos/submit"
          target="_blank"
          rel="noreferrer noopener"
          style={{ textDecoration: "none" }}
        >
          <Typography variant="button" color="secondary">
            Create a post
          </Typography>
        </a>
        <OpenInNewIcon />
      </StyledButton>
      {children}
    </React.Fragment>
  );
};

export const ConnectedRedditPostView = connect(mapStateToProps)(RedditPostView);
