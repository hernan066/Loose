import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import Producto from "../components/producto/Producto"
import { AnimatePresence } from "framer-motion"
import { Transition } from "../components/transition/Transition"


const PageProducto = () => {
  return (
    <>
    <AnimatePresence exitBeforeEnter>
      <Transition />

      </AnimatePresence>
      
      <Navbar />
      <Producto />
      <Footer />



    </>
  )
}

export default PageProducto