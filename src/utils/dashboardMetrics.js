export function getConsumoPeriodo(consumos, tanqueNombre) {
  const now = new Date()
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const startOfWeek = new Date(startOfToday)
  startOfWeek.setDate(startOfWeek.getDate() - 7)

  const filtered = consumos.filter((item) => item.tanques?.nombre === tanqueNombre)

  const sumLitros = (items) =>
    items.reduce((total, item) => total + Number(item.litros_despachados ?? 0), 0)

  const hoy = filtered.filter((item) => new Date(item.fecha_consumo) >= startOfToday)
  const semana = filtered.filter((item) => new Date(item.fecha_consumo) >= startOfWeek)

  return {
    hoy: sumLitros(hoy),
    semana: sumLitros(semana),
  }
}
