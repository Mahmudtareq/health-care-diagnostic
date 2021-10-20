import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);

            })
            .finally(() => setIsLoading(false))


    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    // register for new user
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be At least 6 Character');
            return;
        }
        if (! /(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
            setError('Password must contain uppercase ,lowercase, and Digit');
            return;

        }
        if (isLogin) {
            processLogin(email, password);
        }
        else {
            createNewUser(email, password);
            return <Redirect to="/register" />
        }

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');

            })
            .cath(error => {
                setError(error.message);
            })

    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })



    }


    // -------------------------------
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({});

            }
            setIsLoading(false);
        });
        return () => unsubscribed;

    }, [auth])

    return {
        user,
        logOut,
        email,
        error,
        password,
        isLoading,
        isLogin,
        toggleLogin,
        handleRegistration,
        createNewUser,
        signInWithGoogle,
        processLogin,
        handlePasswordChange,
        handleEmailChange
    }
}
export default useFirebase;