export const mockCredentials = {
  email: 'admin@aerodromo.com',
  password: 'admin123',
}

export const mockProfile = {
  id: '00000000-0000-0000-0000-000000000001',
  nombre_completo: 'Carlos Administrador',
  rol: 'admin',
  organizacion_id: '00000000-0000-0000-0000-000000000010',
  organizaciones: {
    id: '00000000-0000-0000-0000-000000000010',
    nombre: 'Aeródromo Jesús María',
  },
}

export const mockHangares = [
  {
    id: '00000000-0000-0000-0000-000000000020',
    nombre: 'Hangar Principal',
    ubicacion: 'Jesús María, Córdoba',
  },
  {
    id: '00000000-0000-0000-0000-000000000021',
    nombre: 'Hangar Norte',
    ubicacion: 'Sector norte del aeródromo',
  },
]

export const mockTanques = [
  {
    id: '00000000-0000-0000-0000-000000000030',
    nombre: 'Tanque Principal',
    stock_actual_litros: 7400,
    capacidad_maxima_litros: 10000,
    odometro_actual: 12550,
    ultima_actualizacion: '2026-07-08T18:30:00.000Z',
    hangares: {
      id: '00000000-0000-0000-0000-000000000020',
      nombre: 'Hangar Principal',
      ubicacion: 'Jesús María, Córdoba',
    },
  },
  {
    id: '00000000-0000-0000-0000-000000000031',
    nombre: 'Tanque Reserva',
    stock_actual_litros: 1800,
    capacidad_maxima_litros: 5000,
    odometro_actual: 4820,
    ultima_actualizacion: '2026-07-07T14:15:00.000Z',
    hangares: {
      id: '00000000-0000-0000-0000-000000000021',
      nombre: 'Hangar Norte',
      ubicacion: 'Sector norte del aeródromo',
    },
  },
  {
    id: '00000000-0000-0000-0000-000000000032',
    nombre: 'Tanque Auxiliar',
    stock_actual_litros: 450,
    capacidad_maxima_litros: 2000,
    odometro_actual: 910,
    ultima_actualizacion: '2026-07-06T09:00:00.000Z',
    hangares: {
      id: '00000000-0000-0000-0000-000000000021',
      nombre: 'Hangar Norte',
      ubicacion: 'Sector norte del aeródromo',
    },
  },
]

export const mockAbastecimientos = [
  {
    id: '00000000-0000-0000-0000-000000000040',
    proveedor: 'YPF Directo',
    litros_recibidos: 5000,
    numero_remito: 'REM-JMA-001',
    fecha_ingreso: '2026-07-01T10:00:00.000Z',
    tanques: { nombre: 'Tanque Principal' },
  },
  {
    id: '00000000-0000-0000-0000-000000000041',
    proveedor: 'Axion Aviation',
    litros_recibidos: 2000,
    numero_remito: 'REM-JMA-002',
    fecha_ingreso: '2026-07-05T14:30:00.000Z',
    tanques: { nombre: 'Tanque Reserva' },
  },
]

export const mockConsumos = [
  {
    id: '00000000-0000-0000-0000-000000000050',
    matricula: 'LV-ABC',
    destino_empresa: 'Vuelo Privado',
    litros_despachados: 100,
    odometro_inicio: 12450,
    odometro_final: 12550,
    fecha_consumo: '2026-07-08T16:00:00.000Z',
    estado: 'confirmado',
    tanques: { nombre: 'Tanque Principal' },
  },
  {
    id: '00000000-0000-0000-0000-000000000051',
    matricula: 'LV-XYZ',
    destino_empresa: 'Escuela de vuelo',
    litros_despachados: 65,
    odometro_inicio: 4810,
    odometro_final: 4875,
    fecha_consumo: '2026-07-09T11:20:00.000Z',
    estado: 'pendiente_5min',
    tanques: { nombre: 'Tanque Reserva' },
  },
  {
    id: '00000000-0000-0000-0000-000000000052',
    matricula: 'LV-DEF',
    destino_empresa: 'Mantenimiento',
    litros_despachados: 40,
    odometro_inicio: 900,
    odometro_final: 940,
    fecha_consumo: '2026-07-07T09:15:00.000Z',
    estado: 'confirmado',
    tanques: { nombre: 'Tanque Auxiliar' },
  },
]
