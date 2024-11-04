import Stack from "@mui/material/Stack";
import logo from "../../assets/logo.svg";
import background from "../../assets/backGround.svg"; // Ensure this path is correct

function SignUp() {
  return (
    <div
      className="main"
      style={{
        backgroundColor: "#EFEEFB",
        width: "100vw", // Make sure the width covers the entire viewport
        height: "100vh", // Make sure the height covers the entire viewport
        position: "absolute",
        top: 0,
        left: 0,
        backgroundImage: `url(${background})`, // Correct way to set the background image // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the background image
      }}
    >
      {/* Outer Stack takes full height to center the inner Stack */}
      <Stack
        justifyContent="center" // Centers vertically
        alignItems="center" // Centers horizontally
        style={{
          height: "100vh", // Use full height of the viewport // Ensure it uses full width
        }}
      >
        <Stack
          style={{
            width: "400px",
            height: "524px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 8px 20px #0000000A",
            borderRadius: "12px",
            opacity: "1",
            padding: "20px", // Added padding for better spacing
          }}
        >
          <Stack className="logo" justifyContent="center" alignItems="center">
            <img src={logo} alt="Logo" />
          </Stack>
          <Stack justifyContent="center" alignItems="center" marginTop={2}>
            Sign up
          </Stack>
          <Stack justifyContent="center" alignItems="center" marginTop={1}>
            You're just a few details away to set up a culture of feedback and a thriving environment.
          </Stack>
          
        </Stack>
      </Stack>
    </div>
  );
}

export default SignUp;
