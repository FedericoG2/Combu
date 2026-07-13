import Card from './Card'

export default function PageHeader({ title, meta, description, children }) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        {meta && (
          <p className="text-sm font-semibold text-brand-600">{meta}</p>
        )}
        <h1 className={`text-2xl font-semibold text-slate-900 ${meta ? 'mt-0.5' : ''}`}>{title}</h1>
        {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
      </div>
      {children}
    </div>
  )
}

export function ModulePlaceholder({ title, description }) {
  return (
    <Card className="border-dashed">
      <p className="text-sm font-medium text-slate-700">{title}</p>
      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </Card>
  )
}
