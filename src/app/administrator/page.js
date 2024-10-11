'use client';

import Title from "../components/ui/textual/Title";
import { useUser } from '@/app/contexts/UserContext';
import ProtectedRoutes from "../utils/ProtectedRoutes";
import Hero from "../components/ui/wrapper/Hero";

export default function Admin() {

    const { user } = useUser();

    return (
        <Hero>
            <Title>Bonjour admin {user?.id} </Title>
        </Hero>
    );
}