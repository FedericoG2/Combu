const stroke = {
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: 1.5,
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function NavIcon({ className = 'h-5 w-5', children }) {
  return (
    <svg className={className} aria-hidden {...stroke}>
      {children}
    </svg>
  )
}

/** Tanques — cilindro industrial con escalera (custom, no hay equivalente en Lucide) */
export function IconTank({ className = 'h-5 w-5' }) {
  return (
    <NavIcon className={className}>
      <path d="M3.75 5.25v13" />
      <path d="M3.75 18.25c0 2.2 3.8 4 8.25 4s8.25-1.8 8.25-4" />
      <path d="M20.25 18.25V5.25" />
      <path d="M3.75 5.25c0-2.2 3.8-4 8.25-4s8.25 1.8 8.25 4" />
      <path d="M15.25 6.25v11" />
      <path d="M18 6.25v11" />
      <path d="M15.25 8.5h2.75" />
      <path d="M15.25 11h2.75" />
      <path d="M15.25 13.5h2.75" />
      <path d="M15.25 16h2.75" />
    </NavIcon>
  )
}
