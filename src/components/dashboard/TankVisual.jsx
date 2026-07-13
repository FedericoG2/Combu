export default function TankVisual({ percentage, className = '' }) {
  const fill = Math.min(Math.max(percentage, 0), 100)

  return (
    <div
      className={`relative mx-auto w-36 shrink-0 sm:w-44 ${className}`}
      aria-hidden
    >
      {/* Tapa superior */}
      <div className="mx-2 h-3 rounded-[50%] border border-slate-300/90 bg-gradient-to-b from-slate-100 to-slate-200 shadow-sm" />

      {/* Cuerpo del tanque */}
      <div className="relative -mt-1.5 h-44 overflow-hidden rounded-2xl border-2 border-slate-300/80 bg-gradient-to-b from-slate-100 to-slate-50 shadow-[inset_0_2px_8px_rgba(15,23,42,0.06)] sm:h-48">
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-800 via-brand-600 to-brand-400 transition-all duration-700 ease-out"
          style={{ height: `${fill}%` }}
        />
        <div className="pointer-events-none absolute inset-y-3 left-2 w-3 rounded-full bg-white/25" />
        <div className="pointer-events-none absolute inset-x-4 bottom-2 h-px bg-white/20" />
      </div>

      {/* Base */}
      <div className="mx-3 -mt-1 h-2 rounded-[50%] border border-slate-300/70 bg-slate-200/80" />
    </div>
  )
}
