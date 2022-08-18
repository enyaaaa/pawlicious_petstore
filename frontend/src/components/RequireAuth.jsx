import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        localStorage.getItem('roles') == 5150
            ? <Outlet />
            : auth?.token
                ? <Navigate to="/" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />

        /* auth?.token ? <Outlet/> : <Navigate to='/login' state={{ from: location }} replace /> */
    );
}

export default RequireAuth;