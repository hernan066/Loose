import "./contacto.css"
import images from "../../assets/images"

export const Contacto = () => {
    return (
        <section className="contact__container">
            <div className="sct1__container">
                <div className="sct1_textcontain">
                    <h1 /* className="sct1__text" */>CONTACTO</h1>
                </div>
                <div className="sct1__imagecontainer">
                    <img className="sct1__image" src={images.contacto_banner} alt="imagenfacha" />
                </div>
            </div>
            <div className="sct2_cajanegra"></div>
            <div className="sct2__container">
                <div className="sct2_imagebloq">
                    
                    <div className="sct2_orangesquare">
                            <div className="sct2_text">
                                <div className="sct2_text txt1">
                                    <h2>MEDIOS DE</h2>
                                </div>
                                <div className="sct2_text txt2">
                                    <h2>CONTACTO</h2> </div>
                            </div>
                            <div className="sct2_imagecontainer">
                                <img src={images.contacto_banner2} alt="imagenfacha2" />
                            </div>
                    </div>
                    <div className="sct2_esquina">
                        <div className="sct2_triangle"></div>
                    </div>
                </div>
                <div className="sct2_textbloq">
                    <h2 className="sct2_texttitle">VISIT OUR STORE</h2>
                    <div className="sct2_parrafos">
                        <p>Address: 500 Terry Francois Street</p>
                        <p>San Francisco, CA 94158</p>
                        <p>Phone: 123-456-7890</p>
                        <p>Email: info@mydomain.com</p>
                    </div>
                    <h2 className="sct2_texttitle2">STOCKIST</h2>
                    <div className="sct2_stockist">
                        <div className="sct2_stockist 1">
                            <h3>Store 1</h3> 
                            <p>500 Terry Francois Stree</p>
                            <p>San Francisco, CA 94158</p>
                            <p>​Tel: 123-456-7890</p>
                        </div>
                        <div className="sct2_stockist 2">
                            <h3>Store 2</h3> 
                            <p>500 Terry Francois Street</p>
                            <p>San Francisco, CA 94158</p>
                            <p>Tel: 123-456-7890</p>
                        </div>
                        <div className="sct2_stockist 3">
                            <h3>Store 3</h3> 
                            <p>500 Terry Francois Street</p>
                            <p>San Francisco, CA 94158</p>
                            <p>Tel: 123-456-7890</p>
                        </div>
                        <div className="sct2_stockist 4">
                            <h3>Store 4</h3>
                            <p>500 Terry Francois Street</p>
                            <p>San Francisco, CA 94158</p>
                            <p>Tel: 123-456-7890</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 
