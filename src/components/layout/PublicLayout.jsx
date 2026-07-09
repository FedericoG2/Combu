import CombuLogo from '../CombuLogo'

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white px-4 py-4 shadow-sm shadow-slate-200/60 sm:px-6">
        <div className="mx-auto flex max-w-lg items-center justify-center">
          <CombuLogo size="sm" variant="light" />
        </div>
      </header>

      <main className="mx-auto w-full max-w-lg px-4 py-8 sm:px-6">{children}</main>
    </div>
  )
}
