function getStockLevel(percentage) {
  if (percentage > 50) return { label: 'Nivel óptimo', className: 'bg-emerald-100 text-emerald-800' }
  if (percentage >= 20) return { label: 'Nivel bajo', className: 'bg-amber-100 text-amber-800' }
  return { label: 'Crítico', className: 'bg-red-100 text-red-800' }
}

export default function StockBadge({ stock, capacity }) {
  const percentage = capacity > 0 ? (stock / capacity) * 100 : 0
  const { label, className } = getStockLevel(percentage)

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {label}
    </span>
  )
}

export function StockBar({ stock, capacity }) {
  const percentage = capacity > 0 ? Math.min((stock / capacity) * 100, 100) : 0
  let barColor = 'bg-brand-600'
  if (percentage < 20) barColor = 'bg-red-500'
  else if (percentage < 50) barColor = 'bg-amber-500'

  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200/90">
      <div
        className={`h-full rounded-full transition-all duration-700 ease-out ${barColor}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
