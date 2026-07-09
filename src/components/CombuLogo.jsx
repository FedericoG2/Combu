/** Gota de combustible */
export function IconCombuMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.25C10.11 6.53 6.75 9.74 6.75 13.5a5.25 5.25 0 1010.5 0c0-3.76-3.36-6.97-5.25-11.25z" />
    </svg>
  )
}

export default function CombuLogo({ size = 'md', variant = 'light' }) {
  const box = size === 'sm' ? 'h-9 w-9 rounded-lg' : 'h-11 w-11 rounded-xl'
  const icon = size === 'sm' ? 'h-5 w-5' : 'h-6 w-6'
  const text = size === 'sm' ? 'text-lg' : 'text-xl'
  const textColor = variant === 'light' ? 'text-slate-900' : 'text-white'
  const boxClass =
    variant === 'light'
      ? 'bg-brand-600 ring-1 ring-brand-400/30'
      : 'bg-white/10 ring-1 ring-white/20'

  return (
    <div className="flex items-center gap-2.5">
      <div className={`flex items-center justify-center ${boxClass} ${box}`}>
        <IconCombuMark className={`${icon} text-white`} />
      </div>
      <span className={`font-bold tracking-tight ${textColor} ${text}`}>Combu</span>
    </div>
  )
}
