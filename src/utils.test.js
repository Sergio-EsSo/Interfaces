import { formatearFecha } from './utils'
import { describe, it, expect } from 'vitest'

describe('formatear fecha', () => {
  it('formatea correctamente una fecha simple', () => {
    const fecha = new Date(2026, 8, 21, 14, 33)
    const resultado = formatearFecha(fecha)
    expect(resultado).toBe('21/09/2026 14:33')
  })
})
describe('Calcular peso', ()=>{
  if('Calcular el peso a partir de unos minutos dados', ()=>{
    let peso = CalcularPeso(5)
    expect(peso).toBe('Baja')
    peso = calcularPeso(25)
    expect(peso).toBe('Media')
    peso = calcularPeso(90)
    expect(peso).toBe('Alta')
  })
})
