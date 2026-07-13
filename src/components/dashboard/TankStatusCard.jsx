import { MapPin } from 'lucide-react'
import Card from '../ui/Card'
import StockBadge from '../ui/StockBadge'
import TankVisual, { getLevelTextColor } from './TankVisual'

function formatLiters(value) {
  return new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(Number(value))
}

function formatDate(value) {
  if (!value) return '—'
  return new Intl.DateTimeFormat('es-AR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(value))
}

export default function TankStatusCard({ tanque, ubicacion }) {
  const stock = Number(tanque.stock_actual_litros ?? 0)
  const capacity = Number(tanque.capacidad_maxima_litros ?? 0)
  const fillLevel = capacity > 0 ? (stock / capacity) * 100 : 0

  return (
    <Card className="h-full overflow-hidden border-slate-200/80 p-0 shadow-md shadow-slate-200/50">
      <div className="flex h-full flex-col sm:flex-row">
        <div className="flex items-center justify-center border-b border-slate-100 bg-white px-4 py-5 sm:w-[12.5rem] sm:shrink-0 sm:border-b-0 sm:border-r sm:py-6">
          <TankVisual percentage={fillLevel} capacity={capacity} />
        </div>

        <div className="min-w-0 flex-1 p-5">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="min-w-0">
              <h2 className="text-lg font-bold tracking-tight text-slate-900">{tanque.nombre}</h2>
              <p className="mt-1 flex items-start gap-1.5 text-sm text-slate-500">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span>{ubicacion}</span>
              </p>
            </div>
            <StockBadge stock={stock} capacity={capacity} />
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Stock actual
            </p>
            <p className="mt-1.5 flex items-baseline gap-2">
              <span
                className={`text-3xl font-bold tracking-tight sm:text-4xl ${getLevelTextColor(fillLevel)}`}
              >
                {formatLiters(stock)}
              </span>
              <span className="text-lg font-medium text-slate-400">L</span>
            </p>
            <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800 shadow-sm">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" aria-hidden />
              Actualizado: {formatDate(tanque.ultima_actualizacion)}
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}
