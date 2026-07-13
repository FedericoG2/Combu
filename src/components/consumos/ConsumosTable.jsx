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

export default function ConsumosTable({ items }) {
  return (
    <Card className="overflow-hidden p-0 shadow-md shadow-slate-200/50">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <th className="px-5 py-3 sm:px-6">Fecha</th>
              <th className="px-5 py-3 sm:px-6">Matrícula</th>
              <th className="px-5 py-3 sm:px-6">Destino</th>
              <th className="px-5 py-3 sm:px-6">Litros</th>
              <th className="px-5 py-3 sm:px-6">Odómetro</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-slate-500 sm:px-6">
                  No hay consumos registrados.
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id} className="transition hover:bg-slate-50/60">
                  <td className="px-5 py-3.5 text-slate-600 sm:px-6">
                    {formatDate(item.fecha_consumo)}
                  </td>
                  <td className="px-5 py-3.5 font-semibold text-slate-900 sm:px-6">
                    {item.matricula}
                  </td>
                  <td className="px-5 py-3.5 text-slate-700 sm:px-6">
                    {item.destino_empresa ?? '—'}
                  </td>
                  <td className="px-5 py-3.5 font-semibold text-brand-700 sm:px-6">
                    −{formatLiters(item.litros_despachados)} L
                  </td>
                  <td className="px-5 py-3.5 text-slate-600 sm:px-6">
                    {formatLiters(item.odometro_inicio)} → {formatLiters(item.odometro_final)} L
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
