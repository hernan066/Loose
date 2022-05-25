import "./main.css";
import { Banner } from "./seccion1/Banner";
import Seccion2 from "./seccion2/Seccion2";
import { Seccion3 } from "./seccion3/Seccion3";
import Seccion4 from "./seccion4/Seccion4";

const Main = () => {
  return (
    <main>
      <Banner />
      <Seccion2 />
      <Seccion3 />
      <Seccion4 />
    </main>
  );
};

export default Main;
