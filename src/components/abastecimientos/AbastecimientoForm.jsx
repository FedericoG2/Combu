import { useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'

export default function AbastecimientoForm({ tanqueNombre, onCancel }) {
  const [proveedor, setProveedor] = useState('')
  const [litros, setLitros] = useState('')
  const [remito, setRemito] = useState('')
  const [fecha, setFecha] = useState(() => new Date().toISOString().slice(0, 16))

  function handleSubmit(event) {
    event.preventDefault()
    // TODO: guardar abastecimiento y actualizar stock del tanque
    onCancel()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        id="proveedor"
        label="Proveedor"
        placeholder="YPF Directo"
        value={proveedor}
        onChange={(e) => setProveedor(e.target.value)}
        required
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          id="litros"
          label="Litros recibidos"
          type="number"
          min="1"
          step="1"
          placeholder="5000"
          value={litros}
          onChange={(e) => setLitros(e.target.value)}
          required
        />

        <Input
          id="remito"
          label="Número de remito"
          placeholder="REM-JMA-001"
          value={remito}
          onChange={(e) => setRemito(e.target.value)}
          required
        />
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Tanque</p>
        <p className="mt-0.5 text-sm font-semibold text-slate-800">{tanqueNombre}</p>
      </div>

      <Input
        id="fecha"
        label="Fecha de ingreso"
        type="datetime-local"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        required
      />

      <div className="flex flex-col-reverse gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:justify-end">
        <Button type="button" variant="ghost" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit">Registrar abastecimiento</Button>
      </div>
    </form>
  )
}
