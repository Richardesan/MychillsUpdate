import Header from "./Header/Header";
import { Mission } from "./Mission/Mission";
import Teams from "../Team/Teams";
import { Values } from "./Values/Values";
import FAQ from "./FAQ/FAQ";

const Home = () => {
  return (
    <>
      <Header />
      <Mission />
      <Values />
      <Teams />
      <FAQ /> 
    </>
  );
};

export default Home;
