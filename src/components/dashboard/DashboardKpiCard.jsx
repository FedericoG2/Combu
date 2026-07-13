import Card from '../ui/Card'

const accents = {
  brand: {
    card: 'border-brand-100/80',
    icon: 'bg-brand-50 text-brand-600 ring-brand-100',
    value: 'text-brand-700',
  },
  emerald: {
    card: 'border-emerald-100/80',
    icon: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
    value: 'text-emerald-700',
  },
  violet: {
    card: 'border-violet-100/80',
    icon: 'bg-violet-50 text-violet-600 ring-violet-100',
    value: 'text-violet-700',
  },
}

export default function DashboardKpiCard({
  label,
  value,
  icon: Icon,
  accent = 'brand',
  className = '',
}) {
  const styles = accents[accent] ?? accents.brand

  return (
    <Card
      className={`flex flex-1 flex-col justify-between border-slate-200/80 p-5 shadow-md shadow-slate-200/50 ${styles.card} ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</p>
        {Icon && (
          <span
            className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset ${styles.icon}`}
          >
            <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
          </span>
        )}
      </div>
      <p className={`mt-3 text-2xl font-bold tracking-tight ${styles.value}`}>{value}</p>
    </Card>
  )
}
