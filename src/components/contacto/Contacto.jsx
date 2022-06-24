import "./contacto.css"
import images from "../../assets/images"

export const Contacto = () => {
    return (
        <section className="contact__container">
            <div className="sct1__container">
                <div className="sct1_textcontain">
                    <p /* className="sct1__text" */>CONTACTO</p>
                </div>
                <div className="sct1__imagecontainer">
                    <img className="sct1__image" src={images.contacto_banner} alt="imagenfacha" />
                </div>
            </div>
            <div className="sct2__container">
                <div className="sct2_cajanegra"></div>
                <div className="sct2_imagebloq"></div>
                



            </div>
        </section>
    )
} 
