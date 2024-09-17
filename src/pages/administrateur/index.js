import Title from "@/components/ui/textual/Title";
import ProtectedRoutes from "@/hooks/login-gestion/ProtectedRoute";
import { generateClient } from "aws-amplify/api";
import React, { useEffect, useState, useCallback } from 'react';
import { useUser } from '@/utils/UserContext';

const client = generateClient();

export default function Admin() {

    const { user } = useUser();

    console.log(user)

    return (
        <ProtectedRoutes>
            <Title>Bonjour admin {user?.id}</Title>
        </ProtectedRoutes>
    );
}