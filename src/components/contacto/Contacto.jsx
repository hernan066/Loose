import "./contacto.css"
import images from "../../assets/images"

export const Contacto = () => {
    return (
        <section className="contact__container">
            <div className="sct1__container">
                <div className="sct1_textcontain">
                    <h1 className="sct1__text">CONTACTO</h1>
                </div>
                <div className="sct1__imagecontainer">
                    <img className="sct1__image" src={images.contacto_banner} alt="imagenfacha" />
                </div>
            </div>
            <div className="sct2__container">
                <div className="sct2_cajanegra"></div>
                <h2>holapa</h2>
                
                

            </div>
        </section>
    ) 
} 
