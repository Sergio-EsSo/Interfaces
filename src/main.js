import confetti from 'canvas-confetti'
import { formatearFecha, calcularPeso } from './utils'
import './style.css'
import.meta.env.VITE_VERSION

const boton = document.getElementById('añadir')
const input = document.getElementById('texto')
const inputMin = document.getElementById('min')
const lista = document.getElementById('lista')

const scalar = 4
const emote = confetti.shapeFromText({ text: '🧄', scalar })

boton.addEventListener('click', guardarPlan)

function guardarPlan(e) {
  e.preventDefault()

  const texto = input.value.trim()
  const minutos = Number(inputMin.value)

  // Sin texto o con minutos fuera de rango (1-300): no se añade ni hay confeti
  if (!texto) {
    input.focus()
    return
  }
  if (!Number.isFinite(minutos) || minutos < 1 || minutos > 300) {
    inputMin.focus()
    return
  }

  const fechaHoy = formatearFecha(new Date())
  const peso = calcularPeso(minutos)

  const li = document.createElement('li')
  li.textContent = texto + ' - ' + fechaHoy + ' ' + minutos + ' (' + peso + ')'
  lista.appendChild(li)

  input.value = ''
  input.focus()

  confetti({
    particleCount: 50,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2,
    },
    shapes: [emote],
    scalar,
  })
}