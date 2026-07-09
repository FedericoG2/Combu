import { ArrowDownToLine, ChartBar, ClipboardPen, Warehouse } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { IconCombuMark } from '../CombuLogo'
import { IconTank } from '../icons/NavIcons'
import { useAdminLayout } from '../../context/AdminLayoutContext'
import { brandLogoSmClass, brandNavActiveClass } from '../../utils/brandUi'

const navIconClass = 'h-5 w-5 shrink-0'
const navIconProps = { className: navIconClass, strokeWidth: 1.5, 'aria-hidden': true }

const navItems = [
  { to: '/admin', label: 'Panel de control', icon: <ChartBar {...navIconProps} />, end: true },
  {
    to: '/admin/abastecimientos',
    label: 'Abastecimientos',
    icon: <ArrowDownToLine {...navIconProps} />,
  },
  { to: '/admin/consumos', label: 'Consumos', icon: <ClipboardPen {...navIconProps} /> },
  { to: '/admin/hangares', label: 'Hangares', icon: <Warehouse {...navIconProps} /> },
  { to: '/admin/tanques', label: 'Tanques', icon: <IconTank className={navIconClass} /> },
]

export default function AdminSidebar() {
  const { sidebarCollapsed } = useAdminLayout()

  return (
    <aside
      className={`fixed left-0 top-0 z-30 flex h-screen flex-col border-r border-slate-200 bg-white transition-[width] duration-200 ease-in-out ${
        sidebarCollapsed ? 'w-[4.5rem]' : 'w-64'
      }`}
    >
      <div
        className={`flex h-14 shrink-0 items-center border-b border-slate-200 shadow-sm shadow-slate-200/60 ${
          sidebarCollapsed ? 'justify-center px-2' : 'gap-3 px-4'
        }`}
      >
        <span className={brandLogoSmClass} aria-hidden>
          <IconCombuMark className="h-4 w-4" />
        </span>
        {!sidebarCollapsed && (
          <div className="min-w-0">
            <p className="truncate text-sm font-bold tracking-tight text-slate-900">COMBU</p>
            <p className="truncate text-[10px] font-medium text-slate-500">Panel administrador</p>
          </div>
        )}
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-2 py-3">
        {navItems.map(({ to, label, icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            title={sidebarCollapsed ? label : undefined}
            className={({ isActive }) =>
              `flex items-center rounded-lg text-sm font-medium transition-colors ${
                sidebarCollapsed ? 'justify-center px-2 py-2.5' : 'gap-3 px-3 py-2'
              } ${
                isActive
                  ? brandNavActiveClass
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`
            }
          >
            {icon}
            {!sidebarCollapsed && <span className="truncate">{label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
