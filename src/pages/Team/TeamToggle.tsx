import { Box, Link } from "@mui/joy";
import { useState } from "react";
import CoreTeam from "./CoreTeam";
import SupportTeam from "./SupportTeam";

interface LinkData {
  name: string;
  path: string;
}

// Navigation Links Component
const links: LinkData[] = [
  { name: "CORE TEAM", path: "/" },
  { name: "SUPPORT", path: "/about" },
];

// Props for NavLinks Component
interface NavLinksProps {
  activeLink: string;
  onLinkClick: (linkName: string) => void;
}
const NavLinks: React.FC<NavLinksProps> = ({ activeLink, onLinkClick }) => {
  // const [activeLink, setActiveLink] = useState("CORE TEAM"); // Default active link

  // const handleLinkClick = (linkName: string) => {
  //   setActiveLink(linkName);
  // };

  return (
    <Box
      sx={{
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#FAFAFA",
        fontSize: {
          sm: "10px",
          md: "16px",
        },
        lineHeight: "19.5px",
        fontWeight: "500",
        border: "1px solid rgba(77, 79, 92, 1)",
        borderRadius: "90px",
        padding: "10px",
        gap: "8px",
        marginBottom: "70px",
        backgroundColor: "transparent",
      }}
    >
      {links.map((link) => (
        <Link
          key={link.name}
          sx={{
            color:
              activeLink === link.name
                ? "rgba(13, 14, 20, 1)"
                : "rgba(255, 255, 255, 1)",
            textDecoration: "none",
            fontSize: {
              xs: "15px",
              sm: "10px",
              md: "12px",
              lg: "16px",
              xl: "20px",
            },
            fontWeight: "500",
            lineHeight: "26px",
            transition: "all 0.4s ease",
            border: activeLink === link.name ? "1px solid transparent" : "none",
            borderRadius: "100px",
            backgroundColor:
              activeLink === link.name
                ? "rgba(255, 255, 255, 1)"
                : "transparent",
            px: "24px",
            py: activeLink === link.name ? "10px" : "0px",
            height: "30px",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            "&:hover": {
              textDecoration: "none",
            },
            fontFamily: "DM Sans",
          }}
          onClick={() => onLinkClick(link.name)}
        >
          {link.name}
        </Link>
      ))}
    </Box>
  );
};

const MainTeam: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("CORE TEAM");

  return (
    <Box
      sx={{
        // width: "100%",
        // height: "auto",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 4,
        paddingTop: "30px",
        // filter: "drop-shadow(-1px 10px 150px rgba(101, 171, 162, 1))",
      }}
    >
      <Box
        sx={{
        //   width: { xs: "100%", sm: "100%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <NavLinks activeLink={activeLink} onLinkClick={setActiveLink} />
      </Box>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        {activeLink === "CORE TEAM" ? <CoreTeam /> : <SupportTeam />}
      </Box>
    </Box>
  );
};

export default MainTeam;
