import { Link } from 'react-router-dom'
import './step3.css'

export const Step3 = () => {
  return (
    <main className='finish__container'>
        <h1>Felicidades por tu compra!!</h1>
        <p>En breve nos cominicaremos para coordinar el pago y el el envio de tu compra.</p>
        <Link to='/'>Volver a Home </Link>
    </main>
  )
}
