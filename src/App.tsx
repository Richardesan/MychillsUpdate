import { Box } from "@mui/joy";
import bg from "../src/assets/background.png";

import "./App.css";
// import NavBar from "./UI/NavBar/NavBar";
import Header from "./components/Header/Header";
import { Mission } from "./components/Mission/Mission";
import { Values } from "./components/Values/Values";
import Teams from "./components/Team/Teams";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${bg})`,
          backgroundSize: "contain",
          position: "relative", // Ensure the container is positioned relatively
          backgroundColor: "black",
          backgroundRepeat: "repeat",
        }}
      >
        <Header />
        <Mission />
        <Values />
        <Teams />
        <FAQ />
        <Footer />
      </Box>
    </>
  );
}

export default App;
