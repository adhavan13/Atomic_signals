import React from 'react';
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import lightTheme from '../theme/lightTheme';

function TextInput() {
  const theme = createTheme({
    ...lightTheme,
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            border: 'none', // Removes the inner outline (notched outline)
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            // Style for the outer border
            border: `1px solid ${lightTheme.palette.secondary.borderColor}`, // Adds a green outer border
            borderRadius: '4px', // Ensures a consistent border radius
          },
        },
      },
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
          height: "120px",
          '& .MuiInputBase-input': {
            padding: '8px', // Sets padding for the input
          },
        }}
      />
    </ThemeProvider>
  );
}

export default TextInput;
