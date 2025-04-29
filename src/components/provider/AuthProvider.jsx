import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: 'Noman',
        email: 'mm@gmail.com'
    })

    const authInfo = {
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {}

export default AuthProvider