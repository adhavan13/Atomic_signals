const lightTheme = {
    typography: {
      fontFamily: "Poppins",
      // fontSize: 12.25, // Don't change this, as it has the default font size as 14 or 0.875rem by default
    },
    palette: {
      text: {
        primary: "#353448",
        secondary: "#71707E",
        disabled: "#B9B9B9",
      },
      primary: {
        main: "#665CD7",
        light: "#948DE3",
        contrastText: "rgba(256,256,256)",
      },
      secondary: {
        main: "#49C792",
        light: "#CEF3E4",
        contrastText: "rgba(0,0,0,0.87)",
        containedHover: "#6CDBAD",
        outlinedHover: "#EEFBF6",
        disable: "#B9B9B9",
        textColor: "#FFFFFF",
        borderColor:"#CACACA"
      },
      error: {
        main: "#F44F5A",
      },
      success: {
        main: "#49C792",
      },
      background: {
        default: "#FFFFFF",
        paper: "#FFFFFF",
      },
      action: {
        disabledBackground: "#F5F5F5", // Define the disabled background color
        disabled: "#CACACA", // Define the disabled text color
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            background: "#FFFFFF", // Set the background color for the input
            borderRadius: "4px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#EBEBEB", // Default border color
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#CACACA", // Hover border color
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#49C792", // Focused border color
            },
            "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
              borderColor: "#CACACA", // Disabled border color
            },
          },
        },
      },
    },
  };
  
  export default lightTheme;
  