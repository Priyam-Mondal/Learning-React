import React, { useState } from "react";
import UserContext from "./UserContext";


// UserContextProvider is a functional component that accepts a children prop.
// The children represent any nested components wrapped by this provider.


const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;


// UserContext.Provider is used to pass down the user and setUser values to all child components wrapped within this provider.
// Any component within this provider can now access user and setUser using the useContext(UserContext) hook.