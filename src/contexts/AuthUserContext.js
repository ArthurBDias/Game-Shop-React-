import usePersistenceState from "../utilis/usePersistenceState";
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const[user, setUser] = usePersistenceState('user', '')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const userPersistence = localStorage.getItem('user')

        if(userPersistence){
            console.log(usePersistenceState)
            setUser(userPersistence)
        }

        setLoading(false)
    }, [])

    const Login = (name, email) => {
        if (name, email) {
            const LoggedUser = {
                name,
                email
            }

            setUser(JSON.stringify(LoggedUser))
            navigate('/')
            return user
        }

    }

    const Logout = () => {
        setUser(null)
        localStorage.removeItem('user')
        navigate('/')
    }

    return(
        <AuthContext.Provider value={{isLogged: user ? user.includes('name') : false, user, Login, Logout, loading}}>
            {children}
        </AuthContext.Provider>
    )
}