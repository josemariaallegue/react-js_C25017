import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { token, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div>
        <p>Verificando sesión...</p>
      </div>
    );
  }

  if (!token) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children;
}
