import { Cylinder, Gauge } from 'lucide-react'
import { useMemo } from 'react'
import { useAuth } from '../context/AuthContext'
import { mockAbastecimientos, mockConsumos, mockTanques } from '../data'
import DashboardKpiCard from '../components/dashboard/DashboardKpiCard'
import RecentActivity from '../components/dashboard/RecentActivity'
import TankStatusCard from '../components/dashboard/TankStatusCard'
import PageHeader from '../components/ui/PageHeader'

function formatLiters(value) {
  return new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(Number(value))
}

export default function DashboardPage() {
  const { profile } = useAuth()

  const tanquePrincipal = useMemo(
    () => mockTanques.find((t) => t.nombre.toLowerCase().includes('principal')) ?? mockTanques[0],
    [],
  )

  const capacity = Number(tanquePrincipal.capacidad_maxima_litros ?? 0)
  const odometro = Number(tanquePrincipal.odometro_actual ?? 0)
  const orgNombre = profile?.organizaciones?.nombre ?? 'Tu aeródromo'

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="Panel de control"
        description="Visualizá el estado de combustible del tanque"
      />

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-stretch xl:grid-cols-[minmax(0,1fr)_16.5rem]">
        <TankStatusCard tanque={tanquePrincipal} ubicacion={orgNombre} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <DashboardKpiCard
            label="Capacidad total"
            value={`${formatLiters(capacity)} L`}
            icon={Cylinder}
            accent="brand"
          />
          <DashboardKpiCard
            label="Contador del surtidor"
            value={`${formatLiters(odometro)} L`}
            icon={Gauge}
            accent="violet"
          />
        </div>
      </div>

      <RecentActivity
        consumos={mockConsumos}
        abastecimientos={mockAbastecimientos}
        tanqueNombre={tanquePrincipal.nombre}
      />
    </div>
  )
}
