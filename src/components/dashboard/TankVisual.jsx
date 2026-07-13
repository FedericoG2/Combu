function formatLiters(value) {
  return new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(Number(value))
}

function getFillGradient(percentage) {
  if (percentage > 50) return 'from-emerald-800 via-emerald-600 to-emerald-400'
  if (percentage >= 20) return 'from-amber-800 via-amber-500 to-amber-400'
  return 'from-red-800 via-red-600 to-red-400'
}

function markStyle(mark) {
  if (mark === 1) return { top: 0 }
  if (mark === 0) return { bottom: 0 }
  return { top: `${(1 - mark) * 100}%`, transform: 'translateY(-50%)' }
}

export default function TankVisual({ percentage, capacity = 0, className = '' }) {
  const fill = Math.min(Math.max(percentage, 0), 100)
  const marks = [0, 0.25, 0.5, 0.75, 1]
  const bodyClass = 'relative -mt-1.5 h-40 overflow-hidden rounded-2xl border-2 border-slate-300/80 bg-white sm:h-44'

  return (
    <div className={`flex items-end gap-1.5 ${className}`} aria-hidden>
      <div className="w-[7.5rem] shrink-0 sm:w-[8.5rem]">
        <div className="mx-2 h-3 rounded-[50%] border border-slate-300/90 bg-white shadow-sm" />

        <div className={bodyClass}>
          <div
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t transition-all duration-700 ease-out ${getFillGradient(fill)}`}
            style={{ height: `${fill}%` }}
          />

          <div className="pointer-events-none absolute inset-x-0 top-3 bottom-3">
            {marks.map((mark) => (
              <div
                key={mark}
                className="absolute inset-x-2"
                style={markStyle(mark)}
              >
                <div className="h-px bg-slate-400/45" />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-3 -mt-1 h-2 rounded-[50%] border border-slate-300/70 bg-white" />
      </div>

      <div className="relative mb-2 h-40 w-10 shrink-0 sm:h-44">
        {marks.map((mark) => (
          <span
            key={mark}
            className="absolute right-0 text-[10px] font-bold tabular-nums text-slate-900 sm:text-[11px]"
            style={markStyle(mark)}
          >
            {formatLiters(capacity * mark)}
          </span>
        ))}
      </div>
    </div>
  )
}

export function getLevelTextColor(percentage) {
  if (percentage > 50) return 'text-emerald-700'
  if (percentage >= 20) return 'text-amber-600'
  return 'text-red-600'
}
