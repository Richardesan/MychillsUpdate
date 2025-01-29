import { Box, Typography } from "@mui/joy";
import TeamTogggle from "./TeamToggle";

export default function Teams() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        marginBottom: {xs: '50px', md:"150px"},
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm:'80%', md:"75%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: { xs: "12px", md: 4 },
        }}
      >
        <Typography
          sx={{
            fontWeight: "800",
            fontSize: {
              xs: "18px",
              md: "40px",
            },
            lineHeight: {
              xs: "23px",
              sm: "30px",
              md: "52px",
            },
            color: "rgba(255, 255, 255, 1)",
            textAlign: "center",
            letterSpacing: "0.3rem",
            fontFamily: "Syne",
          }}
        >
          MEET THE TEAM
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: {
              xs: "14px",
              sm: "18px",
              md: "26px",
            },
            lineHeight: {
              xs: "23px",
              sm: "30px",
              md: "44.2px",
            },
            color: "rgba(224, 224, 224, 1)",
            textAlign: "center",
            letterSpacing: "0.05rem",
            fontFamily: "DM Sans",
          }}
        >
          A collection of passionate innovators, creators, and strategists, each
          offering their expertise. With a commitment to expand the landmark of
          Web3 and focus on creating a community where creativity, content
          creation, gaming, and other innovations thrive.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
        }}
      >
        <TeamTogggle />
      </Box>
    </Box>
  );
}
