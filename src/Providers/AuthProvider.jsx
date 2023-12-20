import { createContext } from "react";
import app from "../Firebase/firebase.config";
import { getAuth } from "firebase/auth";


const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;