import { Pencil, Trash2 } from 'lucide-react'
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

export default function AbastecimientosTable({ items }) {
  return (
    <Card className="overflow-hidden p-0 shadow-md shadow-slate-200/50">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <th className="px-5 py-3 sm:px-6">Fecha</th>
              <th className="px-5 py-3 sm:px-6">Proveedor</th>
              <th className="px-5 py-3 sm:px-6">Litros</th>
              <th className="px-5 py-3 sm:px-6">Remito</th>
              <th className="px-5 py-3 text-right sm:px-6">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-slate-500 sm:px-6">
                  No hay abastecimientos registrados.
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id} className="transition hover:bg-slate-50/60">
                  <td className="px-5 py-3.5 text-slate-600 sm:px-6">
                    {formatDate(item.fecha_ingreso)}
                  </td>
                  <td className="px-5 py-3.5 font-semibold text-slate-900 sm:px-6">
                    {item.proveedor}
                  </td>
                  <td className="px-5 py-3.5 font-semibold text-emerald-700 sm:px-6">
                    +{formatLiters(item.litros_recibidos)} L
                  </td>
                  <td className="px-5 py-3.5 text-slate-600 sm:px-6">{item.numero_remito}</td>
                  <td className="px-5 py-3.5 sm:px-6">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        type="button"
                        disabled
                        title="Próximamente"
                        className="rounded-lg p-2 text-slate-400 disabled:cursor-not-allowed"
                        aria-label="Editar abastecimiento"
                      >
                        <Pencil className="h-4 w-4" strokeWidth={1.75} />
                      </button>
                      <button
                        type="button"
                        disabled
                        title="Próximamente"
                        className="rounded-lg p-2 text-slate-400 disabled:cursor-not-allowed"
                        aria-label="Eliminar abastecimiento"
                      >
                        <Trash2 className="h-4 w-4" strokeWidth={1.75} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
