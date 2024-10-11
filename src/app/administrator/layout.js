'use client';

import { UserProvider } from "../contexts/UserContext";
import ProtectedRoutes from "../utils/ProtectedRoutes";

export default function AdminLayout({ children }) {

    return (
        <UserProvider>
            <ProtectedRoutes>
                {children}
            </ProtectedRoutes>
        </UserProvider>
    );
}