import { useState } from 'react'
import { Check } from 'lucide-react'
import Button from '../ui/Button'
import Input from '../ui/Input'

export default function ConsumoForm({ tanqueNombre = 'Tanque principal', onSubmit, onCancel }) {
  const [matricula, setMatricula] = useState('')
  const [litros, setLitros] = useState('')
  const [empresaDestino, setEmpresaDestino] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    // Validaciones básicas de campos vacíos/formato
    const matriculaLimpia = matricula.trim().toUpperCase()
    const litrosNum = Number(litros)
    const empresaLimpia = empresaDestino.trim()

    if (!matriculaLimpia) {
      alert('Por favor ingresa una matrícula válida.')
      return
    }

    if (isNaN(litrosNum) || litrosNum <= 0) {
      alert('Los litros cargados deben ser un número positivo mayor a 0.')
      return
    }

    if (!empresaLimpia) {
      alert('Por favor especifica la empresa o destino.')
      return
    }

    const payload = {
      matricula: matriculaLimpia,
      litros: litrosNum,
      empresaDestino: empresaLimpia,
      tanque: tanqueNombre,
      fecha: new Date().toISOString()
    }

    if (onSubmit) {
      onSubmit(payload)
    }
  }

  return (
    <div>
      {/* Encabezado con Título y subtítulo; el icono se muestra en el Modal */}
      <div className="mb-6">
        <p className="text-sm font-medium text-slate-500">{tanqueNombre}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 1. Matrícula del avión */}
        <Input
          id="matricula"
          label="Matrícula del avión"
          placeholder="Ej: LV-GKP"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
          required
        />

        {/* 2. Litros cargados */}
        <Input
          id="litros"
          label="Litros cargados"
          type="number"
          min="1"
          step="any"
          placeholder="Ej: 2500"
          value={litros}
          onChange={(e) => setLitros(e.target.value)}
          required
        />

        {/* 3. Empresa / Destino */}
        <Input
          id="empresaDestino"
          label="Empresa / Destino"
          placeholder="Ej: Aerolíneas Argentinas / SAEZ"
          value={empresaDestino}
          onChange={(e) => setEmpresaDestino(e.target.value)}
          required
        />

        {/* Acciones */}
        <div className="flex flex-col-reverse gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:justify-end">
          {onCancel && (
            <Button type="button" variant="ghost" onClick={onCancel}>
              Cancelar
            </Button>
          )}
          <Button type="submit" className="flex items-center justify-center gap-2">
            <Check className="h-4 w-4" />
            <span>Registrar Carga</span>
          </Button>
        </div>
      </form>
    </div>
  )
}