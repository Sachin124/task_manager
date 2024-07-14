import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({ user: null, token: null });
    const navigate = useNavigate()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = localStorage.getItem('token');
        if (user && token) {
            setAuthState(user, token)
        }
    }, []);

    const login = (user, token) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        setAuthState({ user, token });
        navigate('/home')
    }

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setAuthState({ user: null, token: null });
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{ ...authState, setAuthState, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};


export default AuthProvider;


