import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from './components/Home';
import firebaseApp from './firebaseConfig';
import { Loginin } from './components/auth/Loginin';

const App = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const auth = getAuth(firebaseApp);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);
    return (
        <div>
            {user ? (
                <Home user={user} />
            ) : (
                <Loginin/>
            )}
        </div>
    );
};

export default App;
