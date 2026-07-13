import { Gauge, MapPin } from 'lucide-react'
import Card from '../ui/Card'
import StockBadge, { StockBar } from '../ui/StockBadge'
import TankVisual from './TankVisual'

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

function MetricItem({ label, value, className = '' }) {
  return (
    <div className={className}>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
    </div>
  )
}

export default function TankStatusCard({ tanque }) {
  const stock = Number(tanque.stock_actual_litros ?? 0)
  const capacity = Number(tanque.capacidad_maxima_litros ?? 0)
  const fillLevel = capacity > 0 ? (stock / capacity) * 100 : 0
  const hangar = tanque.hangares?.nombre ?? 'Sin hangar'
  const ubicacion = tanque.hangares?.ubicacion

  return (
    <Card className="overflow-hidden border-slate-200/80 p-0 shadow-md shadow-slate-200/50">
      <div className="flex flex-col lg:flex-row">
        {/* Panel visual del tanque */}
        <div className="flex items-center justify-center border-b border-slate-100 bg-gradient-to-br from-brand-50/80 via-slate-50 to-white px-6 py-8 lg:w-[220px] lg:shrink-0 lg:border-b-0 lg:border-r">
          <TankVisual percentage={fillLevel} />
        </div>

        {/* Contenido */}
        <div className="min-w-0 flex-1 p-6 sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">{tanque.nombre}</h2>
              <p className="mt-1.5 flex items-start gap-1.5 text-sm text-slate-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" strokeWidth={1.75} aria-hidden />
                <span>
                  {hangar}
                  {ubicacion ? ` · ${ubicacion}` : ''}
                </span>
              </p>
            </div>
            <StockBadge stock={stock} capacity={capacity} />
          </div>

          {/* Stock destacado */}
          <div className="mt-7 border-b border-slate-100 pb-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Stock actual
            </p>
            <p className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight text-brand-700 sm:text-5xl">
                {formatLiters(stock)}
              </span>
              <span className="text-xl font-medium text-slate-400">L</span>
            </p>
          </div>

          {/* Métricas secundarias */}
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <MetricItem label="Capacidad total" value={`${formatLiters(capacity)} L`} />
            <MetricItem
              label="Última actualización"
              value={formatDate(tanque.ultima_actualizacion)}
            />
            <MetricItem
              label="Contador del surtidor"
              value={`${formatLiters(tanque.odometro_actual)} L`}
            />
          </div>

          {/* Barra y footer */}
          <div className="mt-7 rounded-xl bg-slate-50/80 p-4 ring-1 ring-slate-100">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="flex items-center gap-1.5 font-medium text-slate-600">
                <Gauge className="h-4 w-4 text-brand-600" strokeWidth={1.75} aria-hidden />
                Nivel del tanque
              </span>
              <span className="text-slate-500">{formatLiters(capacity)} L máx.</span>
            </div>
            <StockBar stock={stock} capacity={capacity} />
          </div>
        </div>
      </div>
    </Card>
  )
}
