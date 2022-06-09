import './producto.css'
import images  from '../../assets/images'

const Producto = () => {
  return (
    <section className='producto__container'>
       
        
        <div className='producto__container-img'>
        <img 
                src={images.remera1}
                alt="remera2"
                border="0"
        />
        </div>



        <div className='product_detail'>
   <h1 className='titulo__producto'>remera</h1>
   <h3 className='span__precio'>2000$</h3>
  
   <h3 className='detail'>descripcion</h3>
   
   <div className='dropdown'>
  <option className='dropbtn'>Seleccione su talla</option>
  <div className='dropdown-content'>
  <a href="#">small</a>
  <a href="#">large</a>
  <a href="#">extra-large</a>
  </div>
</div>

</div>

























    </section>
  )
}

export default Producto