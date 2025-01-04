import { Box } from "@mui/joy";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Carousel from "./UI/Carousel/Carousel";
import Home from "./pages/Home/Home";
import { EmblaOptionsType } from "embla-carousel";
import bg from "../src/assets/background.png";
import Layout from "./components/Layout/Layout";
import Teams from "./pages/Team/Teams";
import Partners from "./pages/Partners/Partners";
import Gamer from "./pages/Gamer/Gamer";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

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
        {" "}
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Teams />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/gamer" element={<Gamer />} />
            </Routes>
          </Layout>
        </Router>
        {/* <Carousel slides={SLIDES} options={OPTIONS} /> */}
      </Box>
    </>
  );
}

export default App;
