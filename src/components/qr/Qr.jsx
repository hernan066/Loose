import images from "../../assets/images"
import "./qr.css"

export const Qr = () => {
  return (
    <div className="qr__contenedor">
        <div className="qr__Izquierda">
        <div className="qr__titulo">
          <h1>Como usar nuestro Qr</h1>
        </div>
        <div className="qr__video">
        </div>

        </div>
        <div className="qr__Derecha">
        <div className="qr__titulo2">
          <h1>QR Loose</h1>
        </div>
        <div className="qr__descripcion">
          <p>Los QR que vienen impresos en las capsulas se diseñaron para que tengas mas detalles sobre el producto que compraste y puedas compartirlo con amigos.
Descargalo en tu celu y para que puedo compartirlo en tus redes y vivir la esperiencia Loose</p>
        </div>
        <div className="qr__qr">
        <div className="qr__qr1">
          <h3>One white</h3>
          <div className="qr__img_container">
            <img src={images.qr_small} alt="qr_small" />
          </div>
        </div>
        <div className="qr__qr2">
          <h3>One black</h3>
        <div className="qr__img_container">
            <img src={images.qr_small} alt="qr_small" />
          </div>
        </div>
        </div>

        </div>
        
        
        





    </div>
  )
}
