import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";

const styles = {
  container: {
    marginTop: "1rem",
    marginBottom: "1rem"
  },
  select: {
    "&:focus": {
      backgroundColor: "inherit"
    }
  }
};

const Dropdown = ({ options, classes, onChange }) => {
  const { container: containerClassName, ...selectClasses } = classes;

  return (
    <div className={containerClassName}>
      <Select
        fullWidth
        native
        // value={this.state.age}
        onChange={onChange}
        classes={selectClasses}
        inputProps={{
          name: "age",
          id: "age-native-simple"
        }}
      >
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </Select>
    </div>
  );
};

export const StyledDropdown = withStyles(styles)(Dropdown);
