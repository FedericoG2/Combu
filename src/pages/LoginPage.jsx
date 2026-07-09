import { AlertCircle, Eye, EyeOff, Loader2, Lock, Mail } from 'lucide-react'
import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { mockCredentials } from '../data'
import CombuLogo, { IconCombuMark } from '../components/CombuLogo'

const fieldIconClass = 'pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400'
const fieldIconProps = { className: fieldIconClass, strokeWidth: 1.8, 'aria-hidden': true }

function CombuLogoHeader({ size = 'md' }) {
  return <CombuLogo size={size} variant="light" />
}

const panelMarcaClass = 'bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700'

function PanelMarca() {
  return (
    <div
      className={`relative hidden overflow-hidden lg:flex lg:w-1/2 lg:flex-col lg:justify-between lg:p-12 ${panelMarcaClass}`}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.06]"
        fill="none"
        aria-hidden
      >
        <defs>
          <pattern id="grid-combu-login" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0v48" stroke="currentColor" strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-combu-login)" />
      </svg>

      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full text-white/[0.1]"
        viewBox="0 0 600 180"
        fill="currentColor"
        aria-hidden
      >
        <path d="M0 180V120h80v60zM90 180V90h50v90zM150 180V70h35v110zM195 180V100h60v80zM265 180V60h45v120zM320 180V85h55v95zM385 180V40h70v140zM465 180V75h40v105zM515 180V110h35v70zM560 180V95h40v85z" />
        <path d="M420 55 L470 30 L520 50 L500 75 L455 70 Z" opacity="0.5" />
        <ellipse cx="480" cy="95" rx="55" ry="12" opacity="0.35" />
      </svg>

      <div className="relative z-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
          <IconCombuMark className="h-6 w-6 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">Combu</span>
      </div>

      <div className="relative z-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
          Plataforma Combu
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-white xl:text-4xl">
          Control de stock de combustible
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-white/85">
          Hangares, tanques, abastecimientos y consumos centralizados para tu aeródromo.
        </p>
      </div>

      <p className="relative z-10 text-xs text-white/60">© 2026 Combu</p>
    </div>
  )
}

function translateAuthError(message) {
  const errors = {
    'Invalid login credentials': 'Email o contraseña incorrectos.',
  }
  return errors[message] ?? 'No se pudo iniciar sesión. Intentá de nuevo.'
}

export default function LoginPage() {
  const { session, loading, signIn } = useAuth()
  const location = useLocation()
  const [email, setEmail] = useState(mockCredentials.email)
  const [password, setPassword] = useState('')
  const [verPassword, setVerPassword] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const from = location.state?.from?.pathname ?? '/admin'

  if (!loading && session) {
    return <Navigate to={from} replace />
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      await signIn(email.trim(), password)
    } catch (err) {
      setError(translateAuthError(err.message))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-white">
      <PanelMarca />

      <div className="flex w-full items-center justify-center px-4 py-12 lg:w-1/2">
        <div className="w-full max-w-sm">
          <div className="mb-10">
            <CombuLogoHeader size="sm" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900">Iniciar sesión</h2>
          <p className="mt-1.5 text-sm text-slate-500">
            Ingresá con tus credenciales para continuar
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                Email
              </label>
              <div className="relative">
                <Mail {...fieldIconProps} />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 py-2.5 pl-11 pr-4 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/25"
                  placeholder="admin@aerodromo.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
                Contraseña
              </label>
              <div className="relative">
                <Lock {...fieldIconProps} />
                <input
                  id="password"
                  type={verPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 py-2.5 pl-11 pr-11 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/25"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setVerPassword((v) => !v)}
                  aria-label={verPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 text-slate-400 transition-colors hover:text-slate-600"
                >
                  {verPassword ? (
                    <EyeOff className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                  ) : (
                    <Eye className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-start gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
              {submitting ? 'Ingresando...' : 'Iniciar sesión'}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-400">
            Demo: {mockCredentials.email} / {mockCredentials.password}
          </p>

          <p className="mt-4 text-center text-xs text-slate-400 lg:hidden">© 2026 Combu</p>
        </div>
      </div>
    </div>
  )
}
