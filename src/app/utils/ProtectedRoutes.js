'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from 'aws-amplify/auth';
import { useUser } from '../contexts/UserContext';
import Loader from '../components/Loader';

async function checkAuthState() {
    try {
        await getCurrentUser();
        return true;
    } catch (error) {
        return false;
    }
}

function ProtectedRoutes({ children }) {
    const { isLoggedIn } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const isAuthenticated = await checkAuthState();
            if (!isAuthenticated) {
                router.push('/se-connecter');
                return;
            }
            setLoading(false);
        }

        fetchData();
    }, [isLoggedIn]);

    if (loading || isLoggedIn === null) {
        return <Loader />;
    }

    if (isLoggedIn === true) {
        return children;
    }

    return null;
}

export default ProtectedRoutes;