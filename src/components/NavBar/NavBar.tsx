import {
  Box,
  Link,
  IconButton,
  List,
  // ListItem,
  Drawer,
} from "@mui/joy";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ListItemText } from "@mui/material";
import Menu from "../../assets/menu.png";
import Logo from "../../UI/Logo/Logo";
import { NavLink } from "react-router-dom";
// import { Link as RouterLink } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

// Navigation Links Component
const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Teams", path: "/team" },
  { name: "Partner", path: "/partners" },
  { name: "Community", path: "/gamer" },
];

const NavLinks = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // Default active link

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };
  // const links = ["Explore", "About", "FAQ", "Contact"];

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      {/* Hamburger Menu for xs and sm screens */}
      <Box
        sx={{
          display: {
            xs: "flex",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "none",
          },
          alignItems: "center",
          pt: 3,
        }}
      >
        <IconButton
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{ color: "white", width: "20px", height: "20px" }}
        >
          <img src={Menu} alt="" style={{ width: "28px", height: "28px" }} />
        </IconButton>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            ".MuiDrawer-content	": {
              backgroundColor: "rgba(19, 26, 36, 1)",
            },
            "--Drawer-transitionDuration": drawerOpen ? "0.4s" : "0.2s",
            "--Drawer-transitionFunction": drawerOpen
              ? "cubic-bezier(0.79,0.14,0.15,0.86)"
              : "cubic-bezier(0.77,0,0.18,1)",
          }}
        >
          <Box
            sx={{
              width: 250,
              padding: 2,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "right",
                justifyContent: "right",
              }}
            >
              <IconButton
                aria-label="close drawer"
                onClick={toggleDrawer(false)}
                sx={{ mb: 2 }}
              >
                <IoCloseCircleOutline
                  style={{
                    width: "26px",
                    height: "26px",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "end",
                    color: "white",
                  }}
                />
              </IconButton>
            </Box>

            <List>
              {links.map((link) => (
                <Link
                  sx={{ color: "white" }}
                  key={link.name}
                  //   component={RouterLink}
                  //   to={link.path}
                >
                  <ListItemText primary={link.name} />
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>

      {/* Regular NavLinks for md, lg, xl screens */}
      <Box
        sx={{
          width: { xs: "10%", sm: "50%" },
          height: "60px",
          display: {
            xs: "none",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          fontFamily: "Montserrat",
          color: "#FAFAFA",
          fontSize: {
            sm: "10px",
            md: "16px",
          },
          lineHeight: "19.5px",
          fontWeight: "600",
          border: "1px solid transparent",
          borderRadius: "120px",
          padding: "14px",
          gap: "16px",
          backgroundColor: "black",
        }}
      >
       {links.map((link) => (
        <NavLink
          to={link.path} // Link to the specified route
          key={link.name}
          // style={({ isActive }) => ({
          //   color: "#fafafa",
          //   fontSize: {
          //     xs: "15px",
          //     sm: "10px",
          //     md: "16px",
          //   },
          //   fontWeight: "600",
          //   lineHeight: "19.5px",
          //   transition: "all 0.4s ease",
          //   border: isActive ? "1px solid transparent" : "none",
          //   borderRadius: "40px",
          //   backgroundColor: isActive
          //     ? "rgba(101, 175, 186, 1)"
          //     : "transparent",
          //   padding: "14px 24px",
          //   textAlign: "center",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   fontFamily: "Montserrat",
          //   textDecoration: "none",
          //   height: "30px",
          //   gap: isActive ? "10px" : "0px",
          // })}
          onClick={() => handleLinkClick(link.name)}
        >
          {link.name}
        </NavLink>
        ))}
      </Box>
    </>
  );
};

const MintButton = () => {
  return <Box sx={{ width: { xs: "10%", sm: "25%" } }}> </Box>;
};

const NavBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 4,
        // backgroundImage: `url(${bg})`,
        paddingTop: "30px",
        filter: "drop-shadow(-1px 10px 150px rgba(101, 171, 162, 1))",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "90%" },
          display: "flex",
          alignItems: "center",
          // justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            width: { xs: "100%", sm: "25%" },
            pt: { xs: 3, sm: 0, md: 0, lg: 0, xl: 0 },

            "&:hover": {
              textDecoration: "none",
            },
          }}
        >
          {" "}
          <Logo />
        </Box>

        <NavLinks />
        <MintButton />
      </Box>
    </Box>
  );
};

export default NavBar;
