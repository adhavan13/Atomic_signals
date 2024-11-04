import React, { useState } from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import performance from "../../assets/performance.jpg";
import InputBase from "@mui/material/InputBase";
import './index.js';
import lightTheme from "../theme/lightTheme"; // Import your lightTheme

function StatusCard() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    setValue(e.target.value);
    setError(false); // Reset error on change
  };

  const handleBlur = () => {
    setFocused(false);
    if (value.trim() === "") {
      setError(true); // Set error if the input is empty
    }
  };

  const handleFocus = () => {
    setFocused(true);
    setError(false); // Reset error on focus
  };

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        width: "452px",
        height: "57px",
        borderRadius: "4px",
        boxShadow: "none",
        border: error
          ? `1px solid ${lightTheme.palette.error.main}` // Error border color
          : focused
          ? `1px solid ${lightTheme.palette.secondary.main}` // Focus border color
          : `1px solid ${lightTheme.palette.text.disabled}`, // Default border color
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Image/Indicator (gauge) */}
      <div
        style={{
          borderRight: error
            ? `1px solid ${lightTheme.palette.error.main}` // Error right border color
            : focused
            ? `1px solid ${lightTheme.palette.secondary.main}`
            : `1px solid ${lightTheme.palette.text.disabled}`,
          width: "67px",
          height: "57px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={performance}
          alt="gauge"
          style={{
            width: "44px",
            height: "27px",
          }}
        />
      </div>

      {/* Text */}
      <CardContent
        sx={{
          flexGrow: 1,
          padding: "0 8px",
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <InputBase
          value={value}
          onChange={handleOnChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Type signal Name"
          sx={{
            color: error ? lightTheme.palette.error.main : lightTheme.palette.text.primary, // Error text color
            fontWeight: 540,
            fontFamily: "Poppins, sans-serif",
            marginLeft: "10px",
            lineHeight: "21px",
            "& .MuiInputBase-input": {
              border: "none", // No border
              outline: "none", // No outline
            },
          }}
        />
        {error && (
          <Typography
            variant="caption"
            color={lightTheme.palette.error.main} // Error message color
            sx={{ fontFamily: "Poppins, sans-serif" }}
          >
            This field is required.
          </Typography>
        )}
      </CardContent>

      {/* Close Icon */}
      <IconButton size="small">
        <CloseIcon />
      </IconButton>
    </Card>
  );
}

export default StatusCard;
