import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/joy";

const Buttons = (props: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        borderRadius: "70px",
        border: "0.8px solid ",
        borderColor: `${props.borderColor}`,
        width: "198px", // Responsive width
        height: "59px", // Responsive height
        fontSize: ["16px", "21.3px"], // Responsive font size
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.1)",
          textDecoration: "none",
          backgroundColor: "transparent",
          color: "transparent",
        },
      }}
    >
      <Button
        sx={{
          textAlign: "center",
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: `${props.background}`,
          width: "100%",
          height: "100%",
          padding: "18px, 48px, 18px, 48px",
          borderRadius: "50px",
          borderColor: "transprarent",
          "&:hover": {
            textDecoration: "none",
            backgroundColor: `${props.background}`,
          },
          fontFamily: "DM Sans",

        }}
      >
        <Typography
          sx={{
            color: "rgba(250, 250, 250, 1)",
            fontSize: ["18px", "18px"], // Responsive font size
            width: "90%",
            fontFamily: "DM Sans",
          }}
        >
          {props.text}
        </Typography>
      </Button>
    </Box>
  );
};

export default Buttons;
