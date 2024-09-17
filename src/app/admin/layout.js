import ProtectedRoutes from '../utils/ProtectedRoutes.js';

export default function AdminLayout({ children }) {
  return (
    <ProtectedRoutes>
      {children}
    </ProtectedRoutes>
  );
}
