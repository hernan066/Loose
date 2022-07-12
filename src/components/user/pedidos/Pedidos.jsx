import "./pedidos.css";


export const Pedidos = () => {
  return (
    <article className="user__pedidos__container">
      <div className="user__data__main">
        <div className="user__data__main__mis-datos">
          <h3>Mis pedidos</h3>
          <div className="user__data__main-container">
            <div className="user__data__main__card pedidos">
                <p><i class="fa-solid fa-triangle-exclamation"></i> Todavía no se ha hecho ningún pedido.</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
