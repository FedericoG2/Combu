import { useMemo, useState } from 'react'
import { Fuel, Plus } from 'lucide-react'
import AbastecimientoForm from '../components/abastecimientos/AbastecimientoForm'
import AbastecimientosTable from '../components/abastecimientos/AbastecimientosTable'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import PageHeader from '../components/ui/PageHeader'
import { mockAbastecimientos, mockTanques } from '../data'

export default function AbastecimientosPage() {
  const [modalOpen, setModalOpen] = useState(false)

  const tanquePrincipal = useMemo(
    () => mockTanques.find((t) => t.nombre.toLowerCase().includes('principal')) ?? mockTanques[0],
    [],
  )

  return (
    <div className="space-y-6">
      <PageHeader
        title="Abastecimientos"
        description="Registro de ingresos de combustible al aeródromo"
      >
        <Button
          type="button"
          className="gap-2"
          onClick={() => setModalOpen(true)}
        >
          <Plus className="h-4 w-4" strokeWidth={2} aria-hidden />
          Nuevo abastecimiento
        </Button>
      </PageHeader>

      <AbastecimientosTable items={mockAbastecimientos} />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Nuevo abastecimiento"
        description="Completá los datos del ingreso de combustible"
        icon={<Fuel className="h-5 w-5 text-white" aria-hidden />}
      >
        <AbastecimientoForm
          tanqueNombre={tanquePrincipal.nombre}
          onCancel={() => setModalOpen(false)}
        />
      </Modal>
    </div>
  )
}
