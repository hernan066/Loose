import "./user.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getMeApi } from "../../api/user";
import { MiCuenta } from "./mi-cuenta/MiCuenta";
import { Pedidos } from "./pedidos/Pedidos";
import { useState } from "react";
import { MisDatos } from "./mis-datos/MisDatos";
import { MisDirecciones } from "./mis-direcciones/MisDirecciones";

export const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [userMenu, setUserMenu] = useState("mi-cuenta");
  const token = currentUser?.jwt;
  const id = currentUser?.id;

  const handlerLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handlerMenu = (menu) => {
    setUserMenu(menu);
  };

  useEffect(() => {
    (async () => {
      const response = await getMeApi(token, handlerLogout);
      console.log(response);
      //hacer el dispatch de getUser, crear getUser
    })();
  }, []);

  return (
    <main className="user__container">
      <h2 className="title">Mis datos</h2>
      <section className="user__data">
        <aside className="user__data__menu">
          <h3>Menu</h3>
          <ul>
            <li
              className={userMenu === "mi-cuenta" ? "active" : ""}
              onClick={() => handlerMenu("mi-cuenta")}
            >
              Mi cuenta
            </li>
            <li
              className={userMenu === "pedidos" ? "active" : ""}
              onClick={() => handlerMenu("pedidos")}
            >
              Mis pedidos
            </li>
            <li
              className={userMenu === "mis-direcciones" ? "active" : ""}
              onClick={() => handlerMenu("mis-direcciones")}
            >
              Mis direcciones
            </li>
            <li
              className={userMenu === "mis-datos" ? "active" : ""}
              onClick={() => handlerMenu("mis-datos")}
            >
              Mis datos
            </li>
            <li onClick={handlerLogout}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Salir
            </li>
          </ul>
        </aside>
        {userMenu === "mi-cuenta" ? <MiCuenta /> : null}
        {userMenu === "pedidos" ? <Pedidos /> : null}
        {userMenu === "mis-datos" ? <MisDatos /> : null}
        {userMenu === "mis-direcciones" ? <MisDirecciones token={token} id={id}/> : null}
      </section>
    </main>
  );
};
