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
          width: { xs: "80%" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          justifyContent: "space-between",
          marginTop: "30px",
          marginBottom: "80px",
          gap: 6,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "40%" },
            display: "flex",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <Logo />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "60%" },

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            marginTop: { xs: "20px", md: "0" },
          }}
        >
          {socialIcons.map((social, idx) => (
            <Box sx={{ display: "flex", gap: "16px" }} key={idx}>
              <img
                src={social.icon}
                alt={social.alt}
                style={{ color: "white", width: "28px" }}
              />
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  fontFamily: "DM Sans",
                  fontWeight: "500",
                  fontSize: "22px",
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
          paddingBottom: "20px",
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
            fontSize: "16px",
            fontFamily: "DM Sans",
            lineHeight: "20.68px",
          }}
        >
          The Chills Room 2024. All right reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
