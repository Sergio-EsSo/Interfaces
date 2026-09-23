import { formatearFecha } from './utils'
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
  const pi = 3.14
  const fechaHoy = formatearFecha(new Date())
  const minutos = inputMin.value
  let peso
  if (minutos < 10) peso = 'Baja'
  else if (minutos < 30) peso = 'Media'
  else peso = 'Alta'

  const li = document.createElement('li')

  li.textContent =
    input.value + ' - ' + fechaHoy + ' ' + minutos + ' (' + peso + ')'
  lista.appendChild(li)
  input.value = ''

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
