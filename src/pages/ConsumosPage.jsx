import { useState, useMemo } from 'react'
import { ExternalLink, Fuel, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import ConsumosTable from '../components/consumos/ConsumosTable'
import PageHeader from '../components/ui/PageHeader'
import { mockConsumos } from '../data'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import ConsumoForm from '../components/consumos/ConsumoForm'

export default function ConsumosPage() {
  // 1. Estado para controlar si el Modal está abierto o cerrado
  const [modalOpen, setModalOpen] = useState(false)

  const consumos = useMemo(
    () =>
      [...mockConsumos].sort(
        (a, b) => new Date(b.fecha_consumo) - new Date(a.fecha_consumo),
      ),
    [],
  )

  // 2. Handlers para las acciones del modal y del formulario
  const handleRegistrarCarga = (datosCarga) => {
    console.log('Carga registrada:', datosCarga)
    // TODO: Guardar en backend o actualizar lista de consumos
    setModalOpen(false) // Cerramos el modal tras guardar
  }

  const handleCancelar = () => {
    setModalOpen(false) // Cerramos el modal
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Consumos"
        description="Historial de consumos registrados por pilotos en el aeródromo."
      >
        <Button
          type="button"
          className="gap-2"
          onClick={() => setModalOpen(true)}
        >
          <Plus className="h-4 w-4" strokeWidth={2} aria-hidden />
          Nuevo consumo
        </Button>
      </PageHeader>

      <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-600">
        <p>(cambiar)Los consumos se registran desde el formulario público del piloto.</p>
        <Link
          to="/registro"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-brand-600 transition hover:text-brand-700"
        >
          Abrir registro
          <ExternalLink className="h-4 w-4" strokeWidth={2} aria-hidden />
        </Link>
      </div>

      <ConsumosTable items={consumos} />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Nuevo Consumo de combustible"
        description="Completá los datos del consumo de combustible."
        icon={<Fuel className="h-5 w-5 text-white" aria-hidden />}
      >
        <ConsumoForm
          tanqueNombre="Tanque principal"
          onSubmit={handleRegistrarCarga}
          onCancel={handleCancelar}
        />
      </Modal>
    </div>
  )
}