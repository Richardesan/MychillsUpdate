import { Box, Link, Typography } from "@mui/joy";
import logo from "../../assets/chillsLogo.png";
// import { Link as RouterLink } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        "&:hover": {
          textDecoration: "none",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "50px",
            sm: "40px",
            md: "50px",
            lg: "72px",
          },
          height: {
            xs: "50px",
            sm: "40px",
            md: "72px",
            lg: "72px",
          },
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
      <Typography
        sx={{
          // ml: { xs: 0, sm: 0, md: 1, lg: 2 },
          color: "#fafafa",
          textDecoration: "none",
          fontSize: {
            xs: "15px",
            sm: "12px",
            md: "17px",
          },
          fontFamily: "DM Sans ",
          fontWeight: { xs: 700, sm: 700 },
          lineHeight: { xs: "18px", md: "28.64px" },
        }}
      >
        TheChillsRoom
      </Typography>
    </Link>
  );
};

export default Logo;
