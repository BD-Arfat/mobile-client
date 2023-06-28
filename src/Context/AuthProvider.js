import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Fairebase/Fairebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) =>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoding(false)
        })
        return()=>{
            unsubscribe ()
        }
    },[]);

    const logout = () =>{
        setLoding(true)
        return signOut(auth)
        
    }

    const updateUser = (userInfo) =>{
        return updateProfile(user, userInfo)
    }

    const authInfo = {
        user, loding, createUser,loginUser,logout,updateUser, loding
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;