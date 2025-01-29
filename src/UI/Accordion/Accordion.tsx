import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { Button } from "@mui/joy";

interface AccordionIndicatorProps {
  question: string;
  answer: string;
}
// const AccordionIndicator: React.FC<AccordionIndicatorProps> = (props) => {

const AccordionIndicator: React.FC<AccordionIndicatorProps> = (props) => {
  return (
    <Accordion
      sx={{
        textDecoration: "none",
        backgroundColor: "rgba(13, 14, 20, 1)",
        gap: 4,
        marginBottom: "20px",
        border: "1px solid transparent ",
        borderRadius: "8px",
        // borderImageSlice: "1",
        // borderImageSource:
        //   "linear-gradient(91.44deg, #65AFBA -5.85%, #14151F 29.58%, #65AFBA 65.02%, #0D0E14 100.45%)",
        "&:hover": {
          textDecoration: "none",
        },
      }}
    >
      <AccordionSummary
        sx={{
          backgroundColor: "rgba(13, 14, 20, 1)",
          fontWeight: "700",
          gap: { md: "80px" },
          px: "10px",
        }}
      >
        <Button
          sx={{
            width: "92%",
            color: "white",
            backgroundColor: "transparent",
            justifyContent: "left",
            textAlign: "left",
            alignItems: "start",
            fontFamily: "Syne",
            fontWeight: "700",
            fontSize: {
              xs: "11px",
              sm: "16px",
              md: "20px",
            },
            lineHeight: {
              xs: "13.2px",
              sm: "22px",
              md: "24.8px",
            },
            letterSpacing: "0.15rem",
            "&:hover": {
              backgroundColor: "transparent",
              textDecoration: "none",
            },
          }}
        >
          {props.question}
        </Button>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          maxWidth: "90%",
          textAlign: "left",
          fontFamily: "Syne",
          fontWeight: "400",
          color: "rgba(255, 255, 255, 1)",
          fontSize: {
            xs: "12px",
            sm: "15px",
            md: "18px",
          },
          lineHeight: {
            xs: "19px",
            sm: "22px",
            md: "32px",
          },
          letterSpacing: "3px",
          px: "10px",
        }}
      >
        {props.answer}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionIndicator;

// border: 1px solid;

// border-image-source: linear-gradient(91.44deg, #65AFBA -5.85%, #14151F 29.58%, #65AFBA 65.02%, #0D0E14 100.45%);
