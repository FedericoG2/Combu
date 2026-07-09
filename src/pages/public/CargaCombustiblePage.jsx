import ConsumoPilotoForm from '../../components/forms/ConsumoPilotoForm'
import PublicLayout from '../../components/layout/PublicLayout'

export default function CargaCombustiblePage() {
  return (
    <PublicLayout>
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">Formulario de carga</h1>
        <p className="mt-1.5 text-sm text-slate-500">
          Registrá los litros de combustible cargados en tu aeronave
        </p>
      </div>

      <ConsumoPilotoForm />
    </PublicLayout>
  )
}
