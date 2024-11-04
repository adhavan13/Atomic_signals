import * as React from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './index.js';
import lightTheme from "../theme/lightTheme.js";

function Anatomy() {
  const theme = createTheme(lightTheme); // Use the imported lightTheme directly

  return (
    <ThemeProvider theme={theme}>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={4}
        variant="outlined"
        placeholder="Place Holder" // Add placeholder here
        InputLabelProps={{
          shrink: false, // Ensure the label is always floated
        }}
        sx={{
          width: "250px",
          height: "107px",
          background: "#FFFFFF",
          borderRadius: "4px",
          '& .MuiOutlinedInput-root': {
            height: "107px",
            padding: "15px",
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: lightTheme.palette.text.disabled, // Default border color
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: lightTheme.palette.secondary.light, // Hover border color
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: lightTheme.palette.secondary.main, // Focused border color
            },
            '&.Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: lightTheme.palette.error.main, // Error border color
            },
            '&.Mui-disabled': {
              background: "#F5F5F5",
              borderColor: lightTheme.palette.secondary.light, // Disabled border color
            },
          },
          '& .MuiInputBase-input': {
            height: "120px", // Ensure the input height matches the TextField
            padding: "8px", // Set padding for the input area (including placeholder)
            boxSizing: "border-box", // Ensure padding doesn't affect the height
          },
        }}
      />
    </ThemeProvider>
  );
}

export default Anatomy;
