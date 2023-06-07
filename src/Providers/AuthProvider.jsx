import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config'

export const AuthContex = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        setLoading(true)
        signOut(auth)
    }
    // Update Profile Auth
    const userProfileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    // google
    const googleSign = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscrive = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User: ', currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscrive;
        }
    }, [])

    const AuthInfo = {
        user,
        loading,
        googleSign,
        userProfileUpdate, logout, LoginUser, createUser
    }
    return (
        <AuthContex.Provider value={AuthInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;