'use client'

import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,

} from 'firebase/auth'

import { useRouter } from 'next/navigation'
import { auth } from '../firebase';
import { useEffect, useContext, useMemo, createContext, useState } from 'react'



const AuthContext = createContext({
    user: null,
    signUp: async () => { },
    signIn: async () => { },
    logOut: async () => { },
    isLoading: false,
    error: null

})

export const AuthProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false)
    const [intialLoading, setIntialLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const router = useRouter()

    // Presiting the user
    useEffect(() =>
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //log in
                setUser(user)
                setLoading(false)
            } else {
                //not log in
                setUser(null)
                setLoading(true)
                router.push('./login')
            }
            setIntialLoading(false)
        })

        , [auth])



    const signUp = async (email, password) => {
        setLoading(true)
        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setUser(userCredential.user)
            router.push('/')
            setLoading(false)
        })
            .catch((error) => alert(error.message))
            .finally(() => setLoading(false))
    }


    const signIn = async (email, password) => {
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setUser(userCredential.user)
            router.push('/')
            setLoading(false)
        })
            .catch((error) => alert(error.message))
            .finally(() => setLoading(false))
    }

    const logOut = async () => {
        setLoading(true)
        await signOut(auth).then(() => {
            setUser(null)

        }).catch((error) => alert(error.message))
            .finally(() => setLoading(false))
    }

    const memoriedValue = useMemo(() => ({
        user, logOut, signIn, signUp, isLoading, error
    }), [user, isLoading])

    return (<AuthContext.Provider value={memoriedValue} >
        {!intialLoading && children}
    </AuthContext.Provider >)


}


export default function useAuth() {
    return useContext(AuthContext)
}