//! Step 1: Create the context
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

//! Step 2: Use the Provider in Your Application
import React from "react";
import { AuthProvider } from "./AuthContext";
import UserProfile from "./UserProfile";

const App = () => {
    return (
        <AuthProvider>
            <UserProfile />
        </AuthProvider>
    );
};

export default App;

//! Consume the Context
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const UserProfile = () => {
    const { user, login, logout } = useContext(AuthContext);

    return (
        <div>
            {user ? (
                <>
                    <h1>Welcome, {user.name}!</h1>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <button
                    onClick={() => login({ name: "John Doe", email: "john@example.com" })}
                >
                    Login
                </button>
            )}
        </div>
    );
};

export default UserProfile;
