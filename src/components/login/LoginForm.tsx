import { signInWithPopup, GoogleAuthProvider, OAuthCredential } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase-config'
import { loginReducer } from '../../state/slices/authSlice'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from '../../state/store'
import { Button } from "@mantine/core";

const providerGoogleAuth = new GoogleAuthProvider();

const LoginForm: React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector((state: RootState) => state.auth)


    useEffect(() => {
        if (user !== null) {
            navigate("/providers")
        }
    }, [])

    const loginGoogleButton = () => {
        signInWithPopup(auth, providerGoogleAuth)
            .then((result) => {
                const credential: OAuthCredential | null = GoogleAuthProvider.credentialFromResult(result);
                const token = credential!.accessToken;
                const user = result.user;

                dispatch(loginReducer(user))

                navigate('/providers')

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                const email = error.email;

                const credential = GoogleAuthProvider.credentialFromError(error);
            })
    }

    return (
        <div>
            <Button  onClick={loginGoogleButton}>Log in with Google</Button>
        </div>
    )
}

export default LoginForm;