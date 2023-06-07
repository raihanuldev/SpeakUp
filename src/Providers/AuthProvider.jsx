import { createContext, useState } from "react";

const AuthContex = createContext(null)

const AuthProvider = ({childern}) => {
    const [user,setUser] = useState(null)

    
    const AuthInfo = {
        user
    }
    return (
        <AuthContex.Provider value={AuthInfo}>
            {childern}
        </AuthContex.Provider>
    );
};

export default AuthProvider;