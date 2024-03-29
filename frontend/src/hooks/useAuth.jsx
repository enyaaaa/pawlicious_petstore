import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

//return auth context from auth provider
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;