import { useMemo } from 'react'
import { useAuth } from '../context/AuthContext'
import { mockAbastecimientos, mockConsumos, mockTanques } from '../data'
import RecentActivity from '../components/dashboard/RecentActivity'
import TankStatusCard from '../components/dashboard/TankStatusCard'
import PageHeader from '../components/ui/PageHeader'

export default function DashboardPage() {
  const { profile } = useAuth()

  const tanquePrincipal = useMemo(
    () => mockTanques.find((t) => t.nombre.toLowerCase().includes('principal')) ?? mockTanques[0],
    [],
  )

  const orgNombre = profile?.organizaciones?.nombre ?? 'Tu aeródromo'

  return (
    <div className="space-y-6">
      <PageHeader
        title="Panel de control"
        description={`${orgNombre} — estado del tanque principal`}
      />

      <TankStatusCard tanque={tanquePrincipal} />

      <RecentActivity
        consumos={mockConsumos}
        abastecimientos={mockAbastecimientos}
        tanqueNombre={tanquePrincipal.nombre}
      />
    </div>
  )
}
