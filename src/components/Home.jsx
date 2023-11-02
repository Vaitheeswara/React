import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

const Home = ({ user }) => {
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log('User signed out');
            })
            .catch((error) => {
                console.error('Error signing out:', error.message);
            });
    };

    return (
        <div>
            <h2>Welcome, {user.displayName || 'User'}!</h2>
            <button onClick={handleLogout}>Log Out</button>
            <p>This is your home page.</p>
        </div>
    );
};

export default Home;
