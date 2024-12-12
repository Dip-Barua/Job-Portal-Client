import AuthContext from "./AuthContext";
import { useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";


const AuthProvider = ({ children }) => {


    const  [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


        // Monitor authentication state changes (on page reload)
        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                if (currentUser) {
                    setUser(currentUser);  // Set user state if logged in
                } else {
                    setUser(null);  // Set user to null if not logged in
                }
                setLoading(false);  // Stop loading when state is updated
            });
    
            // Cleanup the subscription when the component is unmounted
            return () => unsubscribe();
        }, []);


    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email, password);

    }

    const signInUser = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user); 
            setLoading(false); 
            return userCredential; 
        })


    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
        .then(() => {
            setUser(null);
        })

    }


    const authInfo = {

        user,
        loading,
        createUser,
        signInUser,
        signOutUser
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;