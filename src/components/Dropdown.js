import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const styles = {
  container: {
    marginTop: "1rem",
    marginBottom: "1rem"
  },
  select: {
    "&:focus": {
      backgroundColor: "inherit"
    }
  },
  formControl: {
    minWidth: "130px",
    maxWidth: "400px"
  }
};

const Dropdown = ({
  options,
  classes,
  onChange,
  name,
  id,
  label,
  ...props
}) => {
  const { container, formControl, ...selectClasses } = classes;
  return (
    <div className={container}>
      <FormControl required className={formControl}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select
          fullWidth
          native
          onChange={onChange}
          classes={selectClasses}
          inputProps={{
            name: name,
            id: id
          }}
          {...props}
        >
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export const StyledDropdown = withStyles(styles)(Dropdown);
