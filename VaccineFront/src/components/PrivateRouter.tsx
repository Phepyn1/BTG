    import type { ReactNode } from "react";
    import { Navigate } from "react-router-dom";

    interface PrivateRouteProps {
    children: ReactNode;
    }
    function PrivateRoute({ children }: PrivateRouteProps) {
    const token = localStorage.getItem("token");
    if (!token) {
         if (!token) {
            
    // salva a rota que o usuário tentou acessar
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
    }
    return children;
    }

    export default PrivateRoute;