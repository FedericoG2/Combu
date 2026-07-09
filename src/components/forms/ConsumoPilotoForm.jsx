import { useState } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Input from '../ui/Input'

export default function ConsumoPilotoForm() {
  const [matricula, setMatricula] = useState('')
  const [litros, setLitros] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    // TODO: guardar consumo en Supabase (tabla consumos)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          id="matricula"
          label="Matrícula"
          placeholder="LV-ABC"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
          required
        />

        <Input
          id="litros"
          label="Litros cargados"
          type="number"
          min="1"
          step="1"
          placeholder="100"
          value={litros}
          onChange={(e) => setLitros(e.target.value)}
          required
        />

        <Button type="submit" className="w-full py-2.5" disabled>
          Registrar carga
        </Button>
      </form>
    </Card>
  )
}
