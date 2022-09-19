let diaMesAnio = document.getElementById('diaMesAnio')
let tiempo4 = document.getElementById('tiempo4')
let fecha = new Date()
let dias = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sabado','Domingo']
let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
diaMesAnio.innerHTML= `${dias[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`
setInterval(() =>{
    let hora = new Date()
    tiempo4.innerHTML= hora.toLocaleTimeString()
},1000)