import React from "react";

export const ColumnLayout = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      maxWidth: "400px"
    }}
  >
    {children}
  </div>
);
