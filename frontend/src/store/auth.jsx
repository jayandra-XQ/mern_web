import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'))

    const [user, setUser] = useState("")
    const [services, setServices] = useState([])


    const authorizationToken = `Bearer ${token}`

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem('token', serverToken)
    };

    let isLoggedIn = !!token;

    // tackling the logout functionality
    const LogoutUser = () => {
        setToken(" ");
        return localStorage.removeItem("token")
    }

    //JWT AUTHENTICATION - TO GET THE CURRENTLY  LOGGEDIN USER DATA

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: 'GET',
                headers: {
                    'Authorization': authorizationToken,
                    'Content-Type': 'application/json',
                },
            })

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData)

            }
        } catch (error) {
            console.error("Error fetching user data")
        }
    };

    // To fetch the services data from the database
    const getServices = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/data/service", {
                method: "GET",
            });

            if (response.ok) {
                const services = await response.json();
                console.log(services)
                setServices(services.msg)
            }
        } catch (error) {
            console.error(`services frontend error ${error}`);
        }
    }


    useEffect(() => {
        getServices();
        userAuthentication();
    }, [])

    return (
        <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, services, authorizationToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authContextvalue = useContext(AuthContext);
    if (!authContextvalue) {
        throw new Error("useAuth used outside of the provider")
    }

    return authContextvalue
}

