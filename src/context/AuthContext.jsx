import { createContext, useState, useEffect } from "react";
import { auth, db } from "../data/fireBaseConfig";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const register = async (email, password) => {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = res.user;

        await setDoc(doc(db, "users", newUser.uid), {
        email: newUser.email,
        role: "user",
        createdAt: new Date()
        });

        return newUser;
    };

    const login = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    const logout = async () => {
        return await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, register }}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
