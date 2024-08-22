import { Box, Typography } from "@mui/joy";
import TeamTogggle from "./TeamToggle";
import TeamPics from "./TeamPic";

export default function Teams() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "start", sm: "center" },
        gap: 3,
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
          gap: { xs: "12px", md: 4 },
        }}
      >
        <Typography
          sx={{
            fontWeight: "800",
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "40px",
            },
            lineHeight: {
              xs: "17.76px",
              sm: "30px",
              md: "52px",
            },
            color: "rgba(255, 255, 255, 1)",
            textAlign: "center",
            letterSpacing: "10%",
            fontFamily: "Syne",
          }}
        >
          MEET THE TEAM
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "26px",
            },
            lineHeight: {
              xs: "17.76px",
              sm: "30px",
              md: "44.2px",
            },
            color: "rgba(224, 224, 224, 1)",
            textAlign: "center",
            letterSpacing: "3%",
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
      <TeamPics />
    </Box>
  );
}
