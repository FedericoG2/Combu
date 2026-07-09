import { LogOut } from 'lucide-react'
import { useMemo } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useAdminLayout } from '../../context/AdminLayoutContext'
import { brandAvatarClass } from '../../utils/brandUi'

function IconSidebarToggle({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.75}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
      />
    </svg>
  )
}

function inicialDesdeUsuario(nombre, email) {
  const fuente = nombre?.trim() || email?.trim() || 'A'
  return fuente.charAt(0).toUpperCase()
}

export default function AdminTopbar() {
  const { profile, session, signOut } = useAuth()
  const { sidebarCollapsed, toggleSidebar } = useAdminLayout()

  const email = session?.user?.email ?? 'admin@aerodromo.com'
  const nombre = profile?.nombre_completo ?? 'Administrador'
  const inicial = useMemo(() => inicialDesdeUsuario(nombre, email), [nombre, email])

  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-3 shadow-sm shadow-slate-200/60 sm:px-5">
      <button
        type="button"
        onClick={toggleSidebar}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
        aria-label={sidebarCollapsed ? 'Expandir menú lateral' : 'Colapsar menú lateral'}
        aria-expanded={!sidebarCollapsed}
      >
        <IconSidebarToggle />
      </button>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/90 py-1 pl-1 pr-2.5">
          <span className={`${brandAvatarClass} h-8 w-8 text-sm`} aria-hidden>
            {inicial}
          </span>
          <div className="hidden min-w-0 text-left sm:block">
            <p className="truncate text-sm font-semibold leading-tight text-slate-900">{nombre}</p>
            <p className="truncate text-xs leading-tight text-slate-500">{email}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => signOut()}
          className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
        >
          <LogOut className="h-4 w-4" strokeWidth={1.75} aria-hidden />
          <span className="hidden lg:inline">Cerrar sesión</span>
        </button>
      </div>
    </header>
  )
}
