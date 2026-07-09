import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/layout/ProtectedRoute'
import AdminLayout from './components/layout/AdminLayout'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import AbastecimientosPage from './pages/AbastecimientosPage'
import DespachosPage from './pages/DespachosPage'
import HangaresPage from './pages/HangaresPage'
import TanquesPage from './pages/TanquesPage'
import CargaCombustiblePage from './pages/public/CargaCombustiblePage'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<CargaCombustiblePage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="abastecimientos" element={<AbastecimientosPage />} />
            <Route path="consumos" element={<DespachosPage />} />
            <Route path="hangares" element={<HangaresPage />} />
            <Route path="tanques" element={<TanquesPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
