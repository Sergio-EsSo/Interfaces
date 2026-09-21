import { formatearFecha } from "./utils";
import "./style.css";
import.meta.env.VITE_VERSION;

const boton = document.getElementById("añadir");
const input = document.getElementById("texto");
const lista = document.getElementById("lista");

boton.addEventListener("click", guardarPlan);

function guardarPlan() {
  const pi = 3.14;
  const fechaHoy = dayjs().format("DD/MM/YYYY HH:mm");
  const li = document.createElement("li");
  li.textContent = input.value + " - " + fechaHoy;
  lista.appendChild(li);
  input.value = "";
}
