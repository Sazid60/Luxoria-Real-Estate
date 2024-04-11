import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Triangle } from "react-loader-spinner";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center">
            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            </div>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoutes;