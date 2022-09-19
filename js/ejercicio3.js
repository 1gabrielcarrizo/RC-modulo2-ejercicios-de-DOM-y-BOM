let listaTareas = document.getElementById('formLista')
let formUl = document.getElementById('formUl')
const crearLista = (texto) => {
    let cardTareas = `<li class="list-group-item d-flex justify-content-between align-items-center mt-1 formLi">📌 ${texto}<button class="btn btn-outline-danger botonEliminar ml-1">X</button></li>`
    formUl.innerHTML += cardTareas
}
listaTareas.addEventListener('submit', (e) => {
    e.preventDefault()
    const texto = document.getElementById('inputTareas').value
    if(texto.length != 0){
        crearLista(texto)
        listaTareas.reset()
    }else{
        alert('Por favor, ingrese una tarea por hacer')
    }
})
formUl.addEventListener('click', (e) => {
    if(e.target.classList.contains('botonEliminar')){
        e.target.parentElement.remove()
    }
})