import React, { useEffect } from 'react'
import Login from '../../components/auth/Login'
import Register from '../../components/auth/Register'
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Auth = () => {
    const navigage = useNavigate();
    const isLogging = useSelector(state => state.user.isLogin);

    useEffect(() => {
        const isSigned = auth.onAuthStateChanged(async (user) => {
            !!user && navigage('/')
        });
        return isSigned;
    }, [])

    return (
        <>
            {
                isLogging ? <Login /> : <Register />
            }
        </>
    )
}

export default Auth
