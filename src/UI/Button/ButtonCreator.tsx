import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/joy";

interface Props {
  borderColor: string;
  text: string;
  background: string;
  endDecorator?: React.ReactNode;
}

const ButtonCreator = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "70px",
        border: "0.8px solid ",
        borderColor: `${props.borderColor}`,
        width: "169px", // Responsive width
        height: "46px", // Responsive height
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
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
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

export default ButtonCreator;
