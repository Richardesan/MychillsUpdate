import { Box, Typography } from "@mui/joy";
import { IconContext } from "react-icons";
import { AiOutlineCopyright } from "react-icons/ai";
import Logo from "../../UI/Logo/Logo";
import twitter from "../../assets/twitter.png";
import tiktok from "../../assets/tiktok.png";
import youtube from "../../assets/youtube.png";
import discord from "../../assets/discord.png";

// import { Link as RouterLink } from "react-router-dom";

const socialIcons = [
  { icon: twitter, alt: "twitter", text: "Twitter" },
  { icon: discord, alt: "discord", text: "Discord" },
  { icon: tiktok, alt: "linkedIn", text: "LinkedIn" },
  { icon: youtube, alt: "substack", text: "Substack" },
];

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "auto",
        // backgroundColor: "black",
        paddingBottom: "20px",
      }}
    >
      <Box
        sx={{
          width: { xs: "85%" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: { xs: "center", sm: "center" },
          textAlign: "center",
          marginTop: "30px",
          marginBottom: {xs:"40px", sm:'40px', md:'60px'},
          gap: 6,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "40%" },
            justifyContent: { xs: "center", sm: "space-between" },
            display: "flex",
            alignItems: { xs: "center", sm: "flex-start" },
            gap: "20px",
          }}
        >
          <Logo />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "80%" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "end",
            textAlign: "center",
            gap: { xs: "30px", sm: "16px" },
          }}
        >
          {socialIcons.map((social, idx) => (
            <Box
              sx={{
                display: "flex",
                gap: "4px",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={idx}
            >
              <Box
                component="img"
                src={social.icon}
                alt={social.alt}
                sx={{
                  color: "white",
                  width: { xs: "12px", md: "28px" },
                  height: { xs: "12px", md: "28px" },
                }}
              />
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  fontFamily: "DM Sans",
                  fontWeight: "500",
                  fontSize: { xs: "12px", md: "22px" },
                  lineHeight: "28.64px",
                }}
              >
                {social.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          // paddingBottom: "20px",
        }}
      >
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 1)",
            fontSize: "16px",
            fontFamily: "DM Sans",
            lineHeight: "20.68px",
          }}
        >
          Copyright
        </Typography>
        <IconContext.Provider value={{ color: "white", size: "15.63px" }}>
          <AiOutlineCopyright />
        </IconContext.Provider>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 1)",
            fontSize: { xs: "12px", md: "16px" },
            fontFamily: "DM Sans",
            lineHeight: { xs: "15px", md: "20px" },
          }}
        >
          The Chills Room 2024. All right reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
