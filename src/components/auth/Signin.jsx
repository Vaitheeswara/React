import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import firebaseApp from '../../firebaseConfig';

export const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function SignIn() {
        const auth = getAuth(firebaseApp);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("User successfully created.");
        } catch (error) {
            console.error("Error creating user:", error.message);
        }
    }
    return (
        <div>
            <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={SignIn}>Sign In</button>
        </div>
    );
};
