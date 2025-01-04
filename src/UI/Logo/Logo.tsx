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
        pt: { xs: 3, sm: 0, md: 0, lg: 0, xl: 0 },
        "&:hover": {
          textDecoration: "none",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "28px",
            sm: "24px",
            md: "72px",
          },
          height: {
            xs: "26px",
            sm: "22px",
            md: "72px",
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
          ml: { xs: 2, sm: 1, lg: 2 },
          color: "#fafafa",
          textDecoration: "none",
          fontSize: {
            xs: "12.22px",
            sm: "10.22px",
            md: "22px",
          },
          fontFamily: "DM Sans ",
          fontWeight: { xs: 600, sm: 700 },
          lineHeight: { sm: "28.64px" },
        }}
      >
        The Chills Room
      </Typography>
    </Link>
  );
};

export default Logo;
