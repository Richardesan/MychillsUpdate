import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
// import Buttons from "../Button/Buttons";
import ButtonCreator from "../Button/ButtonCreator";
import { Box } from "@mui/joy";

interface CardProps {
  head: string;
  subhead: string;
}

const CardCreator: React.FC<CardProps> = ({ head, subhead }) => {
  return (
    <Card
      sx={{
        height: "244px",
        width: "396px",
        border: "0.5px solid ",
        borderRadius: "16px",
        backgroundColor: "rgba(255, 255, 255, 0.32)",
        margin: "40px",
      }}
    >
      <CardContent
        sx={{
          width: "90%",
           
          justifyContent: "center",
          alignItems: "start",
          textAlign: "start",
          fontFamily: "Poppins",
          gap: "10px",
        }}
      >
        <Typography
          level="title-md"
          sx={{
            color: "white",
            fontFamily: "Poppins-normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "26px",
          }}
        >
          {head}
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontFamily: "Poppins-normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "26px",
          }}
        >
          {subhead}
        </Typography>
        <Box sx={{ paddingTop: "25px" }}>
          <ButtonCreator
            text="Read More "
            background="transparent"
            borderColor="rgba(255, 255, 255, 1)"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardCreator;
