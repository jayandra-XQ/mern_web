import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState("")
    const [token, setToken] = useState(localStorage.getItem('token'))

    const storeTokenInLS = (serverToken) => {
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
            const response = await fetch ("http://localhost:5000/api/auth/user", {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            if(response.ok) {
                const data = await response.json();
                setUser(data.userData)

            }
        } catch (error) {
            console.error("Error fetching user data")
        }
    }

    useEffect(()=> {
        userAuthentication();
    }, [])

    return <AuthContext.Provider value={{storeTokenInLS, LogoutUser, isLoggedIn, user}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authContextvalue = useContext(AuthContext);
    if(!authContextvalue) {
        throw new Error("useAuth used outside of the provider")
    }

    return authContextvalue
}

