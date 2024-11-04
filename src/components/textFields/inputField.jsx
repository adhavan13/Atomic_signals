import React from 'react';
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import lightTheme from '../theme/lightTheme';

function TextInput() {
  // Create a custom theme for the TextField component
  const theme = createTheme({
    ...lightTheme,
    shape: {
      borderRadius: 4,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Placeholder text"
        error={false}
        disabled={false}
        sx={{
          width: "250px",
          height: "40px",
          "& .MuiInputBase-input": {
            padding: "8px", // Set the padding to 8px
          },
        }}
      />
    </ThemeProvider>
  );
}

export default TextInput;
