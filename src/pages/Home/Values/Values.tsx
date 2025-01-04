import { Box, Typography } from "@mui/joy";
import ValueCards from "./ValuesCard";
import inclusive from "../../../assets/inclusive.png";
import creative from "../../../assets/creative.png";
import innovate from "../../../assets/innovate.png";
import collab from "../../../assets/collab.png";

export function Values() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "start", sm: "center" },
        gap: 6,
        marginBottom: "150px",
      }}
    >
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "start", sm: "center" },
          textAlign: { xs: "start", sm: "center" },
          gap: { xs: "12px", md: "48px" },
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "40px",
            },
            lineHeight: {
              xs: "17.76px",
              sm: "30px",
              md: "76px",
            },
            color: "rgba(255, 255, 255, 1)",
            textAlign: "center",
            letterSpacing: "10%",
            fontFamily: "Syne",
          }}
        >
          CORE VALUES
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "start", sm: "center" },
          gap: 11,
          filter: "drop-shadow(-1px 10px 150px rgba(101, 171, 162, 1))",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "100px", sm: "100px" },
          }}
        >
          <ValueCards
            title="Inclusivity"
            message="We embrace every voice, perspective, experience, and background; ensuring that we are not just adapting to the changes in web3 and the blockchain; we are actively shaping them impactfully."
            image={inclusive}
          />
          <ValueCards
            title="Collaboration"
            message="We believe that the greatest innovations and solutions come from working together, pooling ideas and talents, sharing knowledge, and leveraging the diverse strengths of our members."
            image={collab}
          />
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "100px", sm: "100px" },
          }}
        >
          <ValueCards
            title="Innovation"
            message="Innovation is the driving force behind our community. We embrace new ideas, technologies and creative problem-solving, knowing that the future belongs to those who think and act differently."
            image={innovate}
          />
          <ValueCards
            title="Creativity"
            message="Our community is a haven for those who dare to think outside the box, and express themselves uniquely. Regardless of the niche, we encourage you to explore the full extent of your imagination."
            image={creative}
          />
        </Box>
      </Box>
    </Box>
  );
}

{
  /* border: 1px solid;

border-image-source: linear-gradient(91.44deg, #65AFBA -5.85%, #14151F 29.58%, #65AFBA 65.02%, #0D0E14 100.45%); */
}
