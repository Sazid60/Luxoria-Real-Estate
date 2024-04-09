import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    // Const Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update User 
    const updateUser = (name, photoUrl) => {
      return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }


    const authInfo = { user, createUser, updateUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;