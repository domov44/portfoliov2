// CustomSignOut.js
import React from 'react';
import { signOut } from 'aws-amplify/auth';
import { useUser } from '../contexts/UserContext';
import MenuItem from '../components/ui/navigation/MenuItem';
import { CiLogout } from 'react-icons/ci'
// import { notifySuccess, notifyError } from '../components/ui/alerts/Toastify';

function Logout() {
    const { logout } = useUser();

    const handleSignOut = async () => {
        try {
            await signOut();
            // notifySuccess("Vous êtes bien déconnecté");

            logout();
        } catch (error) {
            // notifyError("Erreur lors de la déconnexion");
        }
    };

    return (
      <MenuItem icon={CiLogout} variant="danger" onClick={handleSignOut}>Se déconnecter</MenuItem>
    );
}

export default Logout;