let hoy = new Date();
function cantidadDiasAnioNuevo(fecha) {
    let AnioNuevo = new Date(fecha.getFullYear()+ 1,0,0);
    let difMilSec = AnioNuevo-fecha;
    let difDias=Math.ceil(difMilSec/(1000*3600*24));
	document.write("Faltan: "+difDias+" dias para anio nuevo.<br>");
    cantidadMesescampeon(fecha);
}
function cantidadMesescampeon(fecha){
    let campeon = new Date(2022,11,18);
    let difMeses=(fecha.getFullYear()-campeon.getFullYear())*12+(fecha.getMonth()-campeon.getMonth());
	document.write("Fuimos campeones hace: "+difMeses+" meses.<br>");
    cantidadAniosNacimiento(fecha);
}
function cantidadAniosNacimiento(fecha){
    let nacimiento = 2005;
    let diferencia = fecha.getFullYear()- nacimiento;
    document.write("Naciste hace: "+diferencia+" anios.");
}        
cantidadDiasAnioNuevo(hoy);