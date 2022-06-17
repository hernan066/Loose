import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import { Transition } from "../components/transition/Transition";


const Home = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Transition />
      </AnimatePresence>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
