import React, { ReactNode } from "react";
import Footer from "../Footer/Footer";
import { Box } from "@mui/joy";
import NavBar from "../NavBar/NavBar";

type LayoutProps = {
  children: ReactNode; // This specifies that children can be any valid React node
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      {/* Fixed Header */}
      <NavBar />

      {/* Main Content */}
      <Box>{children}</Box>

      {/* Fixed Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;
