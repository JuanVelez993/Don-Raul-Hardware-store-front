import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from '../../firebase-config'
import { useNavigate } from "react-router-dom";
import { loginReducer } from '../../state/slices/authSlice'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from '../../state/store'
import * as React from 'react';
import { Button } from "@mantine/core";


const LogIn: React.FunctionComponent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        if (user !== null) {
            navigate("/providers")
        }
    }, [])

    const logInForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch(loginReducer(user))
                    navigate('/providers')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

            setPassword('')
            setEmail('')
        }
    }

    return (
        <div>
            <h1 style={{ color: "#4CAF50" }}>Log In:</h1>
            <form >
                <div >
                    <label htmlFor="username">Email:</label><br />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name="email"
                        value={email}
                    /></div>
                <br />
                <div >
                    <label htmlFor="password">Password:</label><br />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        value={password}
                    /><br />
                </div>
                <br/>
                <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => logInForm(e)}>Log In</Button><br />
            </form>
        </div>
    )
};

export default LogIn;