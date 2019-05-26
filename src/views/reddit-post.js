import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { StyledTextField } from "../components/TextField";
import { ColumnLayout } from "../layouts/column-layout";
import { copyToClipboard } from "../utils/copy-to-clipboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const ButtonWithTooltip = ({
  isTooltipOpen,
  setIsTooltipOpen,
  tooltipTitle,
  children,
  textFieldRef
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
          style={{
            margin: "5px",
            backgroundColor: "#0277bd",
            color: "#ffffff"
          }}
        >
          {children}
          <FileCopyIcon fontSize="small" style={{ marginLeft: "3px" }} />
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};

export const RedditPostView = ({ postText, postTitle, children }) => {
  const [isTitleTooltipOpen, setIsTitleTooltipOpen] = React.useState(false);
  const [isBodyTooltipOpen, setIsBodyTooltipOpen] = React.useState(false);
  const titleTextFieldRef = React.useRef(null);
  const bodyTextFieldRef = React.useRef(null);

  return (
    <React.Fragment>
      <ColumnLayout>
        <Typography variant="h4">Copy and submit your post 🎉</Typography>
        <Typography variant="h5">Request title</Typography>
        <StyledTextField value={postTitle} inputRef={titleTextFieldRef} />
        <Typography variant="h5">Request body</Typography>
        <StyledTextField
          multiline
          value={postText}
          inputRef={bodyTextFieldRef}
        />
      </ColumnLayout>
      <ButtonWithTooltip
        tooltipTitle="Copied!"
        isTooltipOpen={isTitleTooltipOpen}
        setIsTooltipOpen={setIsTitleTooltipOpen}
        textFieldRef={titleTextFieldRef}
      >
        Copy Title
      </ButtonWithTooltip>
      <ButtonWithTooltip
        tooltipTitle="Copied!"
        isTooltipOpen={isBodyTooltipOpen}
        setIsTooltipOpen={setIsBodyTooltipOpen}
        textFieldRef={bodyTextFieldRef}
      >
        Copy Body
      </ButtonWithTooltip>
      {children}
    </React.Fragment>
  );
};
