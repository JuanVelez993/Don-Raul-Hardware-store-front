import { Button } from '@mantine/core'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { RootState } from '../../state/store'


const SignInForm = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const { user } = useSelector((state: RootState) => state.auth)


    useEffect(() => {
        if (user !== null) {
            navigate("/providers")
        }
    }, [])

    const signInForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (password && userName) {
            createUserWithEmailAndPassword(auth, userName, password)
                .then((userCredential) => {
                    // Signed in
                    //If the logged in is succesfull you will acces this part of teh code where you will 
                    //get a lot of information about the user that have logged in
                    const user = userCredential.user;
                    

                    console.log(user);
                    /*Whit the information of the user you can populate an state that is mainly focused on 
                    holding the information of the user that is logged in*/

                    // ...
                })
                .catch((error) => {

                    //If the logged in is not succesfull yu will get to this part and with the message you can tell 
                    //the user what went wrong
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('*** sign in error ***');
                    console.log(errorMessage);
                    // ..
                });

            setUserName('')
            setPassword('')
        }
    }

    return (
        <div>
            <h1 style={{ color: "#4CAF50" }}>Sign In</h1>
            <form>
                <label htmlFor="username">Email:</label><br />
                <input
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    name="username"
                    value={userName}
                /><br />
                <label htmlFor="password">Password:</label><br />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    value={password}
                /><br />
                <br/>
                <Button color="green" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => signInForm(e)}>Sign in</Button><br />
            </form>
        </div>
    )
}

export default SignInForm