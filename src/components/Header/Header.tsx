import { Box, Typography } from "@mui/joy";
import NavBar from "../../UI/NavBar/NavBar";
import logo from "../../assets/bgIogo.png";
import Buttons from "../../UI/Button/Buttons";

const ButtonsMenu = () => {
  return (
    <>
      {/* // Button Menu for xs screen */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "start",
          my: 5,
          fontSize: "23px",
          width: "100%",
          gap: "11px",
        }}
      >
        <Buttons
          text="Learn More "
          background="rgba(101, 175, 186, 1)"
          borderColor="transparent"
        />
        <Buttons
          text="Join Us "
          background="transparent"
          borderColor="white"
        />
      </Box>

      {/* // Button Menu for large screens */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
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
    <Box>
      <NavBar />
      <Box
        id="header"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          py: { xs: "20px", sm: "100px" },
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
            top: "50%", // Adjust positioning as needed
            left: "50%",
            transform: "translate(-50%, -50%)", // Center the image
            zIndex: 1, // Ensure it's above the background but below the text
            width: { xs: "80%", md: "60%" }, // Responsive sizing
            opacity: 0.2, // Optional: Adjust the opacity for a subtle effect
            // paddingTop: "10px",
          }}
        />

        {/* Text Content */}
        <Box
          sx={{
            width: { xs: "85%", md: "80%" },
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
              gap: "88px",
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
                  alignItems: { xs: "start", sm: "center" },
                  textAlign: { xs: "start", sm: "center" },
                  gap: { xs: "12px", md: "48px" },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "24px",
                    },
                    lineHeight: {
                      xs: "17.76px",
                      sm: "30px",
                      md: "28.8px",
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
                      md: "94px",
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
                      xs: "12px",
                      sm: "14px",
                      md: "20px",
                    },
                    lineHeight: {
                      xs: "17.76px",
                      sm: "30px",
                      md: "38px",
                    },
                    color: "rgba(224, 224, 224, 1)",
                    textAlign: "center",
                    letterSpacing: "3%",
                    fontFamily: "DM Sans",
                  }}
                >
                  Ours is an inclusive and engaging community where everyone can
                  contribute, collaborate, and grow. We capitalize on our
                  connections, experience and result-driven team to keep
                  providing endless possibilities. As we have mastered the art
                  of evolving, there are endless possibilities in our community.
                  Join our vibrant community of creators, gamers, and crypto
                  enthusiasts.{" "}
                </Typography>
              </Box>
            </Box>
            <ButtonsMenu />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
