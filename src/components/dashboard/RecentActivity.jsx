import { ArrowDownToLine, Fuel } from 'lucide-react'
import Card from '../ui/Card'

function formatLiters(value) {
  return new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(Number(value))
}

function formatDate(value) {
  return new Intl.DateTimeFormat('es-AR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(value))
}

function buildActivityFeed(consumos, abastecimientos, tanqueNombre, limit = 5) {
  const consumoItems = consumos
    .filter((item) => item.tanques?.nombre === tanqueNombre)
    .map((item) => ({
      id: `consumo-${item.id}`,
      tipo: 'consumo',
      fecha: item.fecha_consumo,
      litros: item.litros_despachados,
      titulo: item.matricula,
      detalle: item.destino_empresa ?? '—',
    }))

  const abastecimientoItems = abastecimientos
    .filter((item) => item.tanques?.nombre === tanqueNombre)
    .map((item) => ({
      id: `abastecimiento-${item.id}`,
      tipo: 'abastecimiento',
      fecha: item.fecha_ingreso,
      litros: item.litros_recibidos,
      titulo: item.proveedor,
      detalle: item.numero_remito ? `Remito ${item.numero_remito}` : '—',
    }))

  return [...consumoItems, ...abastecimientoItems]
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    .slice(0, limit)
}

const tipoConfig = {
  consumo: {
    label: 'Consumo',
    icon: Fuel,
    badgeClass: 'bg-brand-50 text-brand-700 ring-brand-100',
    litrosPrefix: '−',
    litrosClass: 'text-brand-700',
  },
  abastecimiento: {
    label: 'Abastecimiento',
    icon: ArrowDownToLine,
    badgeClass: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    litrosPrefix: '+',
    litrosClass: 'text-emerald-700',
  },
}

export default function RecentActivity({ consumos, abastecimientos, tanqueNombre }) {
  const items = buildActivityFeed(consumos, abastecimientos, tanqueNombre)

  return (
    <Card className="overflow-hidden p-0 shadow-md shadow-slate-200/50">
      <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
        <h2 className="text-base font-bold text-slate-900">Actividad reciente</h2>
        <p className="mt-0.5 text-sm text-slate-500">
          Últimos movimientos del {tanqueNombre.toLowerCase()}
        </p>
      </div>

      {items.length === 0 ? (
        <p className="px-5 py-8 text-center text-sm text-slate-500 sm:px-6">
          Todavía no hay movimientos registrados para este tanque.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <th className="px-5 py-3 sm:px-6">Tipo</th>
                <th className="px-5 py-3 sm:px-6">Detalle</th>
                <th className="px-5 py-3 sm:px-6">Litros</th>
                <th className="px-5 py-3 sm:px-6">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {items.map((item) => {
                const config = tipoConfig[item.tipo]
                const Icon = config.icon

                return (
                  <tr key={item.id} className="transition hover:bg-slate-50/60">
                    <td className="px-5 py-3.5 sm:px-6">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${config.badgeClass}`}
                      >
                        <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                        {config.label}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 sm:px-6">
                      <p className="font-semibold text-slate-900">{item.titulo}</p>
                      <p className="mt-0.5 text-slate-500">{item.detalle}</p>
                    </td>
                    <td className={`px-5 py-3.5 font-semibold sm:px-6 ${config.litrosClass}`}>
                      {config.litrosPrefix}
                      {formatLiters(item.litros)} L
                    </td>
                    <td className="px-5 py-3.5 text-slate-600 sm:px-6">
                      {formatDate(item.fecha)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  )
}
