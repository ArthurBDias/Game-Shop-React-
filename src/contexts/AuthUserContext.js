import usePersistenceState from "../utilis/usePersistenceState";
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const[user, setUser] = useState()
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const userPersistence = localStorage.getItem('user')

        if(userPersistence){
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
            localStorage.setItem('user', JSON.stringify(LoggedUser))
            navigate('/')
            return user
        }

    }

    const AddCart = (item) => {
        if (item && !!user) {

            const newCart = [...JSON.parse(user), item]
            console.log(newCart)
            setCart(JSON.stringify(newCart))
            localStorage.setItem('cart', JSON.stringify(newCart))
        }

    }

    const RemoveItemCart = (itemId) => {
        if (itemId && !!user) {

            setCart([])
            localStorage.setItem('cart', JSON.stringify([]))
        }

    }

    const ClearCart = () => {
            setCart([])
            localStorage.setItem('cart', JSON.stringify([]))
    }
    

    const Logout = () => {
        setUser(null)
        localStorage.removeItem('user')
        navigate('/')
    }

    return(
        <AuthContext.Provider value={{isLogged: !!user, user, Login, Logout, loading, cart, AddCart, RemoveItemCart, ClearCart}}>
            {children}
        </AuthContext.Provider>
    )
}