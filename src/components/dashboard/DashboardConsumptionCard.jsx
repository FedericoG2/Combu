import { Fuel } from 'lucide-react'
import Card from '../ui/Card'

function formatLiters(value) {
  return new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(Number(value))
}

export default function DashboardConsumptionCard({ hoy, semana, className = '' }) {
  return (
    <Card
      className={`flex flex-1 flex-col justify-between border-orange-100/80 p-5 shadow-md shadow-slate-200/50 ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Consumo</p>
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600 ring-1 ring-orange-100 ring-inset">
          <Fuel className="h-4 w-4" strokeWidth={2} aria-hidden />
        </span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-sm text-slate-500">Hoy</span>
          <span className="text-lg font-bold text-orange-700">{formatLiters(hoy)} L</span>
        </div>
        <div className="flex items-baseline justify-between gap-2 border-t border-slate-100 pt-2">
          <span className="text-sm text-slate-500">Esta semana</span>
          <span className="text-lg font-bold text-slate-900">{formatLiters(semana)} L</span>
        </div>
      </div>
    </Card>
  )
}
