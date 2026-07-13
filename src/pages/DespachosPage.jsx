import { useMemo } from 'react'
import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import ConsumosTable from '../components/consumos/ConsumosTable'
import PageHeader from '../components/ui/PageHeader'
import { mockConsumos } from '../data'

export default function DespachosPage() {
  const consumos = useMemo(
    () =>
      [...mockConsumos].sort(
        (a, b) => new Date(b.fecha_consumo) - new Date(a.fecha_consumo),
      ),
    [],
  )

  return (
    <div className="space-y-6">
      <PageHeader
        title="Consumos"
        description="Historial de cargas registradas por pilotos en el aeródromo"
      />

      <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-600">
        <p>Los consumos se registran desde el formulario público del piloto.</p>
        <Link
          to="/registro"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-brand-600 transition hover:text-brand-700"
        >
          Abrir registro
          <ExternalLink className="h-4 w-4" strokeWidth={2} aria-hidden />
        </Link>
      </div>

      <ConsumosTable items={consumos} />
    </div>
  )
}
