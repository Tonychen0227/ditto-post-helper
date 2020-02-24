import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { MenuItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  container: {
    marginTop: "1rem",
    marginBottom: "1rem"
  },
  select: {
    "&:focus": {
      backgroundColor: "inherit"
    },
    display: "flex"
  },
  formControl: {
    minWidth: "150px",
    maxWidth: "300px"
  }
};

export const createDropdownItems = options =>
  options.map((option, index) => (
    <MenuItem value={option} key={index}>
      <Typography variant="inherit" noWrap>
        {option}
      </Typography>
    </MenuItem>
  ));

export const createImageDropdownItems = options =>
  options.map((option, index) => (
    <MenuItem value={option.name} key={index}>
      <ListItemText>{option.name}</ListItemText>
      <img
        alt={option.name}
        src={option.img}
        style={{
          height: "30px",
          width: "30px",
          marginRight: "10px"
        }}
      />
    </MenuItem>
  ));

const Dropdown = ({
  children,
  classes,
  onChange,
  name,
  id,
  label,
  value,
  ...props
}) => {
  const { container, formControl, ...selectClasses } = classes;
  return (
    <div className={container}>
      <FormControl required className={formControl}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select
          fullWidth
          onChange={onChange}
          classes={selectClasses}
          inputProps={{
            name: name,
            id: id,
            value: value
          }}
          {...props}
        >
          {children}
        </Select>
      </FormControl>
    </div>
  );
};

export const StyledDropdown = withStyles(styles)(Dropdown);
