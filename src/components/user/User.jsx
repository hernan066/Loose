import "./user.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

export const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerClick = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <main className="user__container">
      <button onClick={handlerClick}>Logout</button>
    </main>
  );
};
