import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? <Navigate to="/" /> : children;
};
