import { Box, Typography } from "@mui/joy";
import logo from "../../../assets/bgIogo.png";
import Buttons from "../../../UI/Button/Buttons";

const ButtonsMenu = () => {
  return (
    <>
      {/* // Button Menu for xs screen */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          // my: 5,
          fontSize: "16px",
          width: "100%",
          gap: "20px",
        }}
      >
        <Buttons
          text="Learn More "
          background="rgba(101, 175, 186, 1)"
          borderColor="transparent"
        />
        <Buttons text="Join Us " background="transparent" borderColor="white" />
      </Box>

      {/* // Button Menu for large screens */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          my: 5,
          fontSize: "23px",
          width: "100%",
          gap: 3,
        }}
      >
        x
        <Buttons
          text="Learn More "
          background="rgba(101, 175, 186, 1)"
          borderColor="transparent"
        />
        <Buttons text="Join Us " background="transparent" borderColor="white" />
      </Box>
    </>
  );
};

const Header = () => {
  return (
    <Box
      id="header"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        py: { xs: "20px", md: "100px" },
        position: "relative",
      }}
    >
      {/* Overlay Image */}
      <Box
        component="img"
        src={logo}
        alt="Overlay"
        sx={{
          position: "absolute", // Position the image absolutely within the parent
          top: { xs: "43.5%", sm: "60%", md: "50%" }, // Adjust positioning as needed
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the image
          zIndex: 1, // Ensure it's above the background but below the text
          width: { xs: "80%", sm: "60%", md: "60%" }, // Responsive sizing
          opacity: 0.3, // Optional: Adjust the opacity for a subtle effect
          // paddingTop: "10px",
        }}
      />

      {/* Text Content */}
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          height: "auto",
          py: { xl: "40px" },
          zIndex: 2, // Ensure the text is above the image
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: { xs: "40px", sm: "70px" },
            gap: { xs: "48px", sm: "22px", md:'30px', lg: "88px" },
          }}
        >
          <Box
            sx={{
              width: { sm: "95%" },
              justifyContent: "center",
              alignItems: { xs: "start", sm: "center" },
              textAlign: { xs: "start", sm: "center" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: { xs: "12px", md: "48px" },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "800",
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                    md: "18px",
                    lg: "24px",
                  },
                  lineHeight: {
                    xs: "17.76px",
                    sm: "22px",
                    md: "24px",
                    lg: "28.8px",
                  },
                  color: "rgba(255, 255, 255, 1)",
                  textAlign: "center",
                  letterSpacing: "5px",
                  fontFamily: "Syne",
                }}
              >
                THE CHILLS ROOM
              </Typography>
              <Typography
                sx={{
                  color: "rgba(250, 250, 250, 1)",
                  fontSize: {
                    xs: "36px",
                    sm: "36px",
                    md:'60px',
                    lg: "94px",
                  },
                  lineHeight: {
                    xs: "42.48px",
                    sm: "46px",
                    md: "100px",
                  },
                  fontFamily: "Kumar One",
                }}
              >
                Empowering the <br />
                <span> future of web3 </span>
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: {
                    xs: "15px",
                    sm: "14px",
                    md: "20px",
                  },
                  lineHeight: {
                    xs: "26.76px",
                    sm: "30px",
                    md: "38px",
                  },
                  color: "rgba(224, 224, 224, 1)",
                  textAlign: "center",
                  letterSpacing: "3%",
                  fontFamily: "DM Sans",
                }}
              >
                The Chills Room is an inclusive and engaging community where
                everyone can contribute, collaborate, and grow. We capitalize on
                our connections, experience and result-driven team to keep
                providing endless possibilities. As we have mastered the art of
                evolving, there are endless possibilities in our community. Join
                our vibrant community of creators, gamers, and crypto
                enthusiasts.
              </Typography>
            </Box>
          </Box>
          <ButtonsMenu />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
