const pantallaValorAnterior = document.getElementById("valor_anterior")
const pantallaValorActual = document.getElementById("valor_actual")
const BotonNum = document.querySelectorAll('.numero');
const botonOpe = document.querySelectorAll('.operador')


const pantalla = new Pantalla(pantallaValorAnterior, pantallaValorActual);
let bodyTabla = document.getElementById("historialOperaciones")
let conte = ''

BotonNum.forEach(boton => {
    boton.addEventListener('click', ()=>{
        pantalla.colocarNumero(boton.innerHTML)
    })
})

botonOpe.forEach(boton => {
    boton.addEventListener('click', () => {
        pantalla.computar(boton.value) 
        const vect = pantalla.enviar()
        let st = ''
        vect.forEach((item)=>{
            st += "<tr><td>" + item + "</td></tr>"
        })
        bodyTabla.innerHTML = st
    })
})

const eliminarHistorial = () => {
    bodyTabla.innerHTML = "";
    pantalla.eliminar();
    pantalla.borrarTodo();
}




