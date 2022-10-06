import { View, Text } from 'react-native'
import React, { useState, useEffect, createContext, useReducer, useCallback } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const BaseUrl = ""

    const [userToken, setUserToken] = useState(null)
    const [isFirstLaunch, setIsFirstLaunch] = useState(null)

    const initialFetch = {
        loading: false,
        success: false,
        error: false,
        response: false
    }
    const fetchReducer = (state, action) => {
        switch (action.type) {
            case 'setLoading': return { ...state, loading: action.value }
            case 'setSuccess': return { ...state, success: action.value }
            case 'setError': return { ...state, error: action.value }
            case 'setResponse': return { ...state, response: action.value }
            case 'reset': return initialFetch
            default: return state
        }
    }
    const [fetching, setFetching] = useReducer(fetchReducer, initialFetch)

    useEffect(() => {
    }, [])


    return (
        <AuthContext.Provider value={{
            userToken, fetching, setFetching,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }