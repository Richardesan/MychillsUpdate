import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/joy";

interface Props {
  borderColor: string;
  text: string;
  background: string;
  endDecorator?: React.ReactNode;
}

const Buttons = (props: Props) => {
  return (
    <Box
      sx={{
        width:'auto',
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "70px",
        border: "0.8px solid ",
        borderColor: `${props.borderColor}`,
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
          // color: "rgba(255, 255, 255, 1)",
          backgroundColor: `${props.background}`,
          width: "100%",
          height: "100%",
          padding: "10px 39px",
          borderRadius: "50px",
          borderColor: "transparent",
          "&:hover": {
            textDecoration: "none",
            backgroundColor: `${props.background}`,
          },
          fontFamily: "DM Sans",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            color: "rgba(250, 250, 250, 1)",
            fontSize: "16px",
            fontWeight: "700",
            width: "90%",
            fontFamily: "DM Sans",
            textWrap: "nowrap",
          }}
        >
          {props.text}
        </Typography>
      </Button>
    </Box>
  );
};

export default Buttons;
