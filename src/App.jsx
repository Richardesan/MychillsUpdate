import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppRoutes } from "./utils/route";
import Home from "./Home/Home";
import Partners from "./Partners/Partners";
import GamerClique from "./GamerClique/GamerClique";
import Team from "./Team/Team";
import MainHome from "./MainHome/mainHome";
import About from "./About/About";
import ScrollToTop from "./component/ScrollToTop";
function Layout() {
  return (
    <div
      className="h-screen "
      style={{
        backgroundImage: 'url("/chillsbg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundColor: "black", // just to test
      }}
    >
      <ScrollToTop />
      <div className="overflow-y-scroll overflow-x-hidden  max-w-[1512px] mx-auto max-xl:px-[5%]  max-sm:px-[3%]  h-full scroll-container">
        <Routes>
                

          <Route path={AppRoutes.home} element={<MainHome />}>
            <Route path="" element={<Home />} />
            <Route path={AppRoutes.team} element={<Team />} />
            <Route path={AppRoutes.about} element={<About />} />
            <Route path={AppRoutes.partners} element={<Partners />} />
            <Route path={AppRoutes.community} element={<GamerClique />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
