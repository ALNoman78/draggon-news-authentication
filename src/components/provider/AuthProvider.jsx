import { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    // create user 
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signout user
    const signOutUser = () => {
        return signOut(auth)
    }
    // sign in user
    const signInUser = (email, password)=> {
        return signInWithEmailAndPassword(auth , email, password)
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        signOutUser,
        signInUser
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