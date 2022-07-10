import "./user.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getMeApi } from "../../api/user";


export const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser} = useSelector((state)=> state.user);
  const token = currentUser.jwt
  
  const handlerLogout = () => {
    dispatch(logout());
    navigate('/');
  };

useEffect(() => {
 (async ()=>{
    const response = await getMeApi(token, handlerLogout);
    console.log(response);
 })()
}, [])

  

  return (
    <main className="user__container">
      <button onClick={handlerLogout}>Logout</button>
    </main>
  );
};
