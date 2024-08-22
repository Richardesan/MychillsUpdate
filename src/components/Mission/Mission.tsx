import { Box, Typography } from "@mui/joy";
import MissionCard from "./MissionCard";

export function Mission() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "start", sm: "center" },
        gap: 12,
        marginBottom: "200px",
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
              md: "52px",
            },
            color: "rgba(255, 255, 255, 1)",
            textAlign: "center",
            letterSpacing: "10%",
            fontFamily: "Syne",
          }}
        >
          WHO WE ARE?
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "24px",
            },
            lineHeight: {
              xs: "17.76px",
              sm: "30px",
              md: "43.2px",
            },
            color: "rgba(224, 224, 224, 1)",
            textAlign: "center",
            letterSpacing: "3%",
            fontFamily: "DM Sans",
          }}
        >
          Founded by a passionate group of Web3 pioneers, The Chills Room is a
          diverse and dynamic community of creators artists, gamers, developers,
          designer, traders, and more. Our members come from all corners of the
          globe, united by a shared vision of revolutionizing the web3 space. We
          built the community with the belief that the future of the web3 and
          the blockchain lies in the hands of those who dare to innovate,
          collaborate, and push the boundaries of what is possible.
        </Typography>
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
        {/* border: 1px solid;

border-image-source: linear-gradient(91.44deg, #65AFBA -5.85%, #14151F 29.58%, #65AFBA 65.02%, #0D0E14 100.45%); */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <MissionCard
            title="Our Mission"
            message="Our mission is to empower a global community of creators, gamers, and crypto enthusiasts by providing a platform for connection, innovation, and growth in Web3. We aim to foster creativity and collaboration, support decentralized technologies, and build a community that shapes the future of Web3."
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <MissionCard
            title="Our Vision"
            message="Our vision is to lead where creation, gaming, and tech innovations converge to shape web3. We are creating a community where everyone can freely express themselves, create, collaborate, and thrive in the space. By nurturing an inclusive community, we aim to empower members to drive evolution in every niche of web3."
          />
        </Box>
      </Box>
    </Box>
  );
}
