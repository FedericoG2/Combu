function getStockLevel(percentage) {
  if (percentage > 50) return { label: 'Normal', className: 'bg-emerald-100 text-emerald-800' }
  if (percentage >= 20) return { label: 'Bajo', className: 'bg-amber-100 text-amber-800' }
  return { label: 'Crítico', className: 'bg-red-100 text-red-800' }
}

export default function StockBadge({ stock, capacity }) {
  const percentage = capacity > 0 ? (stock / capacity) * 100 : 0
  const { label, className } = getStockLevel(percentage)

  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>
      {label} ({percentage.toFixed(0)}%)
    </span>
  )
}

export function StockBar({ stock, capacity }) {
  const percentage = capacity > 0 ? Math.min((stock / capacity) * 100, 100) : 0
  let barColor = 'bg-emerald-500'
  if (percentage < 20) barColor = 'bg-red-500'
  else if (percentage < 50) barColor = 'bg-amber-500'

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
      <div
        className={`h-full rounded-full transition-all ${barColor}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
