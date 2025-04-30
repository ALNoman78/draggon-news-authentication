import { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user)

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        setUser,
        createNewUser
    }
    // observer of user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {}

export default AuthProvider